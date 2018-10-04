import { Injectable } from '@angular/core';
import { Character } from './user-profile';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../shared/url.service';
import { map } from 'rxjs/operators';
import { User } from '../../shared/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private charactersUrl = this.urlSource.getURL() + '/character';
  private profileUrl = this.urlSource.getURL() + '/profile';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private h = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private character: Character[];

  constructor(
    private http: HttpClient,
    private urlSource: UrlService
    ) { }

  getCharacter(id: number): Observable<Character> {
    return this.http.get(this.charactersUrl + '/' + id, {withCredentials: true}).pipe(
      map(resp => resp as Character)
    );
  }

  getCharacters(id: number): Observable<Character[]> {
    return this.http.get(this.profileUrl + '/' + id, {headers: this.h, withCredentials: true }).pipe(
      map( resp => resp as Character[] ));
  }

  updateCharacter(character: Character): Observable<Character[]> {
    const body = JSON.stringify(character);
    if(character.characterId) {
      console.log('Put');
      const url = this.charactersUrl + '/' + character.characterId;
      return this.http.put(url, body, {headers: this.headers, withCredentials: true}).pipe (
        map(resp => {
          const char: Character[] = resp as Character[];
          if (char) {
            this.character = char;
            console.log(this.character);
          }
          return char;
        }
      ));
    } else {
      console.log('Post');
      return this.http.post(this.charactersUrl, body,
        { headers: this.headers, withCredentials: true}).pipe(
          map(resp => {
            const char: Character[] = resp as Character[];
            if (char) {
              this.character = char;
              console.log(this.character);
            }
            return char;
          })
      );
    }
  }

  deleteCharacter(id: number): Observable<Object> {
    const url = this.charactersUrl + '/' + id;
    console.log(url);
    return this.http.delete(url, { headers: this.headers, withCredentials: true}).pipe(
      map(resp => resp));
  }
}
