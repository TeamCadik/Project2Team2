import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Weapon } from '../../build/shared/weapon';
import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  private selectedWeapon:Weapon = null;

  private appUrl = this.urlSource.getURL()+'/weapons';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlSource: UrlService) { }

  getWeaponsByBuild(id: number): Observable<Weapon[]> {
    return this.http.get(this.appUrl + 'Build' + '/' + id, { withCredentials: true }).pipe(
      map( resp => resp as Weapon[] ));
  }

  getWeaponById(id: number): Observable<Weapon> {
    return this.http.get(this.appUrl + '/' + id, { withCredentials: true }).pipe(
      map( resp => resp as Weapon ));
  }

  getAllWeapons(): Observable<Weapon[]> {
    return this.http.get(this.appUrl, { withCredentials: true }).pipe(
      map( resp => resp as Weapon[] ));
  }

  updateWeapon(weapon: Weapon): Observable<Weapon> {
    const body = JSON.stringify(weapon);
    if(!weapon.weaponId) {
      return this.http
      .post(this.appUrl, body, {headers: this.headers, withCredentials: true})
      .pipe(map(resp=>resp as Weapon));
    }
    const url = this.appUrl+'/'+weapon.weaponId;
    return this.http
    .put(url, body, {headers: this.headers, withCredentials:true})
    .pipe(map(resp=>resp as Weapon));
  }

  getSelectedWeapon():Weapon{
    return this.selectedWeapon;
  }

  setSelectedArmour(w:Weapon){
    this.selectedWeapon = w;
  }
}
