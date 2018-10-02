import { StatService } from './../../shared/stats.service';
import { Component, OnInit, Input } from '@angular/core';
import { Stats } from '../../shared/stats';

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

  @Input () inputlevel: Stats;

  constructor(private statServe: StatService) { }

  ngOnInit() {
  }

  onClickUpdateName() {
    if (this.inputName !== '') {
      this.charName = this.inputName;
      this.inputName = '';
    }
  }

  onClickUpdateLevel() {
    if (this.inputlevel.getChLvl !== null) {
      this.charLvl = this.inputlevel.getChLvl;
      this.inputlevel.getChLvl = null;
      this.statServe.getCharLevel(this.inputlevel.getChLvl);
      console.log(this.inputlevel.getChLvl);
    }
  }
}
