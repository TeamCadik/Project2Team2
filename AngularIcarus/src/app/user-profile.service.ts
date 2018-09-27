import { Injectable } from '@angular/core';
import { Character } from './user-profile';
import { CHARACTERS } from './mock-user-profiles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private charactersUrl = this.urlSource.getURL()+'/character';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private urlSource: UrlService) { }

  getCharacter(id: number): Observable<Character> {
    this.messageService.add(`UserProfileService: fetched hero id=${id}`);
    return of(CHARACTERS.find(character => character.characterId === id));
  }

  getCharacters(): Observable<Character[]> {
    // this.messageService.add('UserProfileService: fetched user profiles')
    // return this.http.get<Character[]>(this.charactersUrl);

    return this.http.get(this.charactersUrl, { withCredentials: true }).pipe(
      map( resp => resp as Character[] ));
  }

  private log(message: string) {
    this.messageService.add(`UserProfileService: ${message}`);
  }
}
