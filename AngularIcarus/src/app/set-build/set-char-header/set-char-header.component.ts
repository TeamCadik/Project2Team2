import { StatService } from './../../shared/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-char-header',
  templateUrl: './set-char-header.component.html',
  styleUrls: ['./set-char-header.component.css'],
  providers: [StatService]
})
export class SetCharHeaderComponent implements OnInit {
  charName = 'Iron Fighter';
  charLvl = 100;
  charILevel = '120';

  inputName = '';
  inputLevel = null;

  constructor(private statServe: StatService) { }

  ngOnInit() {
    this.statServe.getCharLevel(this.charLvl);
    console.log(this.statServe.getChLvl);
  }

  onClickUpdateName() {
    if (this.inputName !== '') {
      this.charName = this.inputName;
      this.inputName = '';
    }
  }

  onClickUpdateLevel() {
    if (this.inputLevel !== null) {
      this.charLvl = this.inputLevel;
      this.inputLevel = null;
      this.statServe.getCharLevel(this.charLvl);
      console.log(this.charLvl);
    }
  }
}
