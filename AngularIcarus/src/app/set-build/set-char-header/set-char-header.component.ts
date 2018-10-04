import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../profile/shared/user-profile.service';
import { Character } from '../../profile/shared/user-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-char-header',
  templateUrl: './set-char-header.component.html',
  styleUrls: ['./set-char-header.component.css'],
  providers: [UserProfileService]
})
export class SetCharHeaderComponent implements OnInit {
  charName = '';
  charLvl = 0;
  charILevel = '120';

  inputName = '';

  character: Character = new Character(null, null, null, null, null, null, null, null, null, null, null);
  href = '';

  dummyText = '';

  inputLvl: number = null;

  constructor(private urlRouter: Router, private userProf: UserProfileService) { }

  ngOnInit() {
    this.getCharIdFromUrl();
  }

  getCharIdFromUrl() {
    this.href = this.urlRouter.url;
    console.log(this.href);
    this.dummyText = this.href.slice(11);
    console.log(this.dummyText);
    this.character.characterId = +this.dummyText;
    console.log(this.character.characterId);
    this.userProf.getCharacter(this.character.characterId).subscribe(curChar => this.character = curChar);
  }

  // onClickUpdateName() {
  //   if (this.inputName !== '') {
  //     this.charName = this.inputName;
  //     this.inputName = '';
  //   }
  // }

  // onClickUpdateLevel() {
  //   if (this.charLvl !== null) {
  //     this.charLvl = this.inputLvl;
  //     console.log(this.charLvl);
  //     this.inputLvl = null;
  //    }
  //  }
}
