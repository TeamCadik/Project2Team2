import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CurrentUser } from './current-user';
import { UrlService } from '../url.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUrl = this.urlSource.getURL() + '/login';
  private headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private user: User;

  constructor(private urlSource: UrlService, private http: HttpClient) { }

  login(username: string, password: string): Observable<CurrentUser> {
    //console.log(username+' '+password);
    if (username && password) {
      // we need to login.
      const body = `user=${username}&pass=${password}`;
      console.log(body);
      return this.http.post(this.appUrl, body, { headers: this.headers, withCredentials: true })
        .pipe(map(resp => {
          const user: CurrentUser = resp as CurrentUser;
          if (user) {
            this.user = user.user;
          }
          return user;
        }));
    } else {
      // we need to check if we're logged in.
      return this.http.get(this.appUrl, { withCredentials: true }) // ajax basically -> sending the request to the body
        .pipe(map(resp => {
          const user: CurrentUser = resp as CurrentUser;
          if (user) {
            this.user = user.user
          }
          return user;
        }));
    }
  }
  logout(): Observable<Object> {
    return this.http.delete(this.appUrl, { withCredentials: true }).pipe(
      map(success => {
        this.user = null;
        return success;
      })
    );
  }
  getUser(): User {
    return this.user;
  }
}
