import { Comments } from './comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Comment } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private appUrl = this.urlSource.getURL() + '/set';
  private headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private buildId = null;
  private comment: Comment;

  currentComments = '';

  constructor(private urlSource: UrlService, private http: HttpClient) { }

  postComments(): Observable<Comments> {
    console.log(this.currentComments);
    const body = `commentStr=${this.currentComments}`;
    console.log('Post');
    return this.http.post(this.appUrl, body,
      { headers: this.headers, withCredentials: true }).pipe(
        map(resp => {
          const comment: Comments = resp as Comments;
          if (comment) {
            this.currentComments = comment.comment;
            console.log(this.comment);
          }
          return comment;
        }));
  }

  getComments(): Observable<Comment> {
    console.log(this.currentComments);
    return this.http.get(this.appUrl, {withCredentials: true}).pipe(
      map(resp => resp as Comment)
    );
  }
}
