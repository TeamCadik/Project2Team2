import { StatService } from './../../shared/stats.service';
import { Component, OnInit, Input } from '@angular/core';
import { Stats } from '../../shared/stats';

@Component({
  selector: 'app-set-char-header',
  templateUrl: './set-char-header.component.html',
  styleUrls: ['./set-char-header.component.css'],
  providers: []
})
export class SetCharHeaderComponent implements OnInit {
  charName = 'Iron Fighter';
  charLvl = 100;
  charILevel = '120';

  inputName = '';

  inputLvl: number = null;


  constructor() { }

  ngOnInit() {
  }

  onClickUpdateName() {
    if (this.inputName !== '') {
      this.charName = this.inputName;
      this.inputName = '';
    }
  }

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
