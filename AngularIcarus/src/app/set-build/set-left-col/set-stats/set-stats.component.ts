import { StatService } from './../../../shared/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-stats',
  templateUrl: './set-stats.component.html',
  styleUrls: ['./set-stats.component.css'],
  providers: [StatService]
})
export class SetStatsComponent implements OnInit {
  hitPoints = 5;
  strength = 5;
  dexterity = 5;
  intel = 5;
  defense = 5;
  attack = 5;

  getChrLvl: number;

  constructor(private statsService: StatService) {}

  ngOnInit() {
    this.getChrLevel();
    console.log(this.statsService.getChLvl);
  }

  getChrLevel() {
    this.getChrLvl = this.statsService.sendCharLevel();
    // console.log(this.getChLvl);
  }

}
