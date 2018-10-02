import { StatService } from './../../../shared/stats.service';
import { Component, OnInit } from '@angular/core';
import { Stats } from '../../../shared/stats';

@Component({
  selector: 'app-set-stats',
  templateUrl: './set-stats.component.html',
  styleUrls: ['./set-stats.component.css'],
  providers: [StatService]
})
export class SetStatsComponent implements OnInit {
  hitPoints: Stats;
  strength: Stats;
  dexterity: Stats;
  intel: Stats;
  defense: Stats;
  attack: Stats;

  constructor(private stats: Stats) {}

  ngOnInit() {
  }

}
