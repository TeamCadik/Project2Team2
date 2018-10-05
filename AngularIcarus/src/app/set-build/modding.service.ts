import { Injectable } from '@angular/core';
import { Character } from '../profile/shared/user-profile'

@Injectable({
  providedIn: 'root'
})
export class ModdingService {
  private charMod: Character = null;

  constructor() { }

  getCharMod(): Character{
    return this.charMod;
  }

  setCharMod(a:Character){
    this.charMod = a;
  }
}
