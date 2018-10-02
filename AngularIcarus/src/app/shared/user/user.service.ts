import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  login(username: string, password: string): Observable<User> {
    if (username && password) {
      const body = `user=${username}&pass=${password}`;
      console.log(body);
      return this.http.post(this.appUrl, body, { headers: this.headers, withCredentials: true })
        .pipe(map(resp => {
          const user: User = resp as User;
          if (user) {
            this.user = user;
            console.log(this.user);
          }
          return user;
        }));
    } else {
      return this.http.get(this.appUrl, { withCredentials: true })
        .pipe(map(resp => {
          const user: User = resp as User;
          if (user) {
            this.user = user;
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
  isLoggedIn(): boolean {
    return (this.getUser() !== undefined);
  }
}
