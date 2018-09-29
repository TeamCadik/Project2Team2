import { Injectable } from '@angular/core';
import { Character } from './user-profile';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../shared/url.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private charactersUrl = this.urlSource.getURL() + '/character';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private urlSource: UrlService
    ) { }

  getCharacter(id: number): Observable<Character> {
    return this.http.get(this.charactersUrl + '/' + id, {withCredentials: true}).pipe(
      map(resp => resp as Character)
    );
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get(this.charactersUrl, { withCredentials: true }).pipe(
      map( resp => resp as Character[] ));
  }

  updateCharacter(character: Character): Observable<Character> {
    const body = JSON.stringify(character);
    if (!character.characterId) {
      return this.http.post(this.charactersUrl, body, {headers: this.headers, withCredentials: true})
      .pipe(map(resp => resp as Character));
    }
    const url = this.charactersUrl + '/' + character.characterId;
    return this.http.put(url, body, {headers: this.headers, withCredentials: true})
    .pipe(map(resp => resp as Character));
  }
}
