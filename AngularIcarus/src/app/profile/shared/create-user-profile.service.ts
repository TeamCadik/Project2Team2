import { Injectable } from '@angular/core';
import { UrlService } from '../../shared/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateUserProfileService {

  constructor(
    private http: HttpClient,
    private urlSource: UrlService
  ) { }
}
