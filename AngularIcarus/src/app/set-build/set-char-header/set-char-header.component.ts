import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../profile/shared/user-profile.service';
import { Character } from '../../profile/shared/user-profile';

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

  inputLvl: number = null;

  constructor(private char: UserProfileService) { }

  ngOnInit() {
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
