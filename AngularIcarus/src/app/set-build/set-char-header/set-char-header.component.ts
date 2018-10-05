
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Character } from './../../profile/shared/user-profile';

import { UserProfileService }  from './../../profile/shared/user-profile.service';


@Component({
  selector: 'app-set-char-header',
  templateUrl: './set-char-header.component.html',
  styleUrls: ['./set-char-header.component.css'],
  providers: []
})
export class SetCharHeaderComponent implements OnInit {
  
  @Input() character: Character;
  
  inputName = '';

  inputLvl: number = null;


  constructor(
    private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userProfileService.getCharacter(id)
      .subscribe(character => this.character = character);
  }
/*
  onClickUpdateName() {
    if (this.inputName !== '') {
      this.charName = this.inputName;
      this.inputName = '';
    }
  }*/

  // onClickUpdateLevel() {
  //   if (this.chrlevel.getChLvl !== null) {
  //     this.charLvl = this.inputLvl;
  //     this.chrlevel.getChLvl = this.charLvl;
  //     this.statServe.getCharLevel(this.chrlevel.getChLvl);
  //     console.log(this.chrlevel.getChLvl);
  //     this.inputLvl = null;
  //   }
  // }
}
