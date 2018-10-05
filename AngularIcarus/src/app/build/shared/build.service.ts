import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Build } from './build';
import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  private appUrl = this.urlService.getURL() + '/builds';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient, private urlService: UrlService) { }

  getBuilds(): Observable<Build[]> {
    return this.http.get(this.appUrl, { withCredentials: true }).pipe(
      map(resp => resp as Build[])
    );
  }
  getBuild(id: number): Observable<Build> {
    const url: string = this.appUrl+'/'+id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp=> resp as Build)
    );
  }
  getCharBuilds(id: number): Observable<Build[]> {
    const url: string = this.appUrl+'/character/'+id;
    return this.http.get(url,{withCredentials: true}).pipe(
      map(resp=> resp as Build[])
    );
  }
  
  updateBuild(build: Build): Observable<Build> {
    const body = JSON.stringify(build);
    if(build.buildId) {
      return this.http.put(this.appUrl, body, {headers: this.headers, withCredentials: true}).pipe (
        map(resp => resp as Build)
      );
    } else {
      console.log(this.appUrl);
      return this.http.post(this.appUrl, body, { headers: this.headers, withCredentials: true}).pipe(
          map(resp => resp as Build));
    }
  }
}