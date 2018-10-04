import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Armour } from '../../build/shared/armour';
import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class ArmourService {
  private selectedArmour:Armour = null;

  private appUrl = this.urlSource.getURL()+'/armours';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlSource: UrlService) { }

  getArmoursByBuild(id: number): Observable<Armour[]> {
    return this.http.get(this.appUrl + 'Build' + '/' + id, { withCredentials: true }).pipe(
      map( resp => resp as Armour[] ));
  }

  getArmourById(id: number): Observable<Armour> {
    return this.http.get(this.appUrl + '/' + id, { withCredentials: true }).pipe(
      map( resp => resp as Armour ));
  }

  getAllArmour(): Observable<Armour[]> {
    return this.http.get(this.appUrl, { withCredentials: true }).pipe(
      map( resp => resp as Armour[] ));
  }

  updateArmour(armour: Armour): Observable<Armour> {
    const body = JSON.stringify(armour);
    if(!armour.armourId) {
      return this.http
      .post(this.appUrl, body, {headers: this.headers, withCredentials: true})
      .pipe(map(resp=>resp as Armour));
    }
    const url = this.appUrl+'/'+armour.armourId;
    return this.http
    .put(url, body, {headers: this.headers, withCredentials:true})
    .pipe(map(resp=>resp as Armour));
  }

  getSelectedArmour(): Armour{
    return this.selectedArmour;
  }

  setSelectedArmour(a:Armour){
    this.selectedArmour = a;
  }
}
