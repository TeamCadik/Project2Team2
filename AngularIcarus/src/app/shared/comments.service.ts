import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comment: Comment;
  private appUrl = this.urlSource.getURL() + '/set';
  private headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private buildId = 3;

  constructor(private urlSource: UrlService, private http: HttpClient) { }

  postComments() {

  }

  getComments() {

  }
}
