import { Injectable } from '@angular/core';
import { UrlService } from '../../shared/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Build } from '../../build/shared/build';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectBuildService {
  private buildsUrl = this.urlSource.getURL()+'/build';

  constructor(
    private http: HttpClient,
    private urlSource: UrlService
  ) { }

  getBuild(id: number): Observable<Build> {
    const url: string = this.buildsUrl+'/'+id;
    return this.http.get(url, {withCredentials:true}).pipe(
      map(resp => resp as Build)
    );
  }

  getBuilds(): Observable<Build[]> {
    return this.http.get(this.buildsUrl, { withCredentials: true}).pipe(
      map( resp => resp as Build[])
    );
  }
}