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
  private charactersUrl = this.urlSource.getURL()+'/character';

  constructor(
    private http: HttpClient,
    private urlSource: UrlService
    ) { }

  getCharacter(id: number): Observable<Character> {
    //this.messageService.add(`UserProfileService: fetched hero id=${id}`);
    //return of(CHARACTERS.find(character => character.characterId === id));
    return this.http.get(this.charactersUrl + '/' + id, {withCredentials: true}).pipe(
      map(resp => resp as Character)
    );
  }

  getCharacters(): Observable<Character[]> {
    // this.messageService.add('UserProfileService: fetched user profiles')
    // return this.http.get<Character[]>(this.charactersUrl);

    return this.http.get(this.charactersUrl, { withCredentials: true }).pipe(
      map( resp => resp as Character[] ));
  }
}
