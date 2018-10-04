import { Comments } from './comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private appUrl = this.urlSource.getURL() + '/set';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  private buildId = 1;
  comment: Comments;
  currentComments = '';

  constructor(private urlSource: UrlService, private http: HttpClient) { }

  postComments(comm: Comments): Observable<Comments[]> {
    console.log(comm);
    const body = JSON.stringify(comm);
    console.log(body);
    console.log('Post');
    const url = this.appUrl + '/' + this.buildId;
    console.log(url);
    return this.http.post(url, body,
      { headers: this.headers, withCredentials: true })
      .pipe(map( Response => Response as Comments[]));
  }

  getComments(id: number): Observable<Comments[]> {
    const url = this.appUrl + '/' + id;
    console.log(url);
    return this.http.get(url,
      { headers: this.headers, withCredentials: true })
      .pipe(map( Response => Response as Comments[]));
  }
}
