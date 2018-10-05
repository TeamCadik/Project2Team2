import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ModdingService } from '../../modding.service'

import { Router } from '@angular/router';
import { StatService } from './../../../shared/stats.service';
import { Component, OnInit } from '@angular/core';
import { Stats } from '../../../shared/stats';
import { Character } from '../../../profile/shared/user-profile';
import { UserProfileService } from '../../../profile/shared/user-profile.service';

@Component({
  selector: 'app-set-stats',
  templateUrl: './set-stats.component.html',
  styleUrls: ['./set-stats.component.css'],
  providers: [UserProfileService]
})
export class SetStatsComponent implements OnInit {
  hitpoints = 5;
  strength  = 5;
  dexterity  = 5;
  intelligence = 5;
  defense = 5;
  attack = 5;
  character: Character = new Character(null, null, null, null, null, null, null, null, null, null, null);
  public charMod: Character;
  href = '';

  dummyText = '';

  constructor(private urlRouter: Router, private userProf: UserProfileService, 
              private route: ActivatedRoute, private moddingService: ModdingService) {}

  ngOnInit() {
    this.getCharIdFromUrl();
    this.charMod = this.moddingService.getCharMod();
  }
      
  getCharMod(){
      this.charMod = this.moddingService.getCharMod();
   
  getCharIdFromUrl() {
    this.href = this.urlRouter.url;
    console.log(this.href);
    this.dummyText = this.href.slice(11);
    console.log(this.dummyText);
    this.character.characterId = +this.dummyText;
    console.log(this.character.characterId);
    this.userProf.getCharacter(this.character.characterId).subscribe(curChar => this.character = curChar);
  }
}
