import { StatService } from './../../../shared/stats.service';
import { Component, OnInit } from '@angular/core';
import { Stats } from '../../../shared/stats';

@Component({
  selector: 'app-set-stats',
  templateUrl: './set-stats.component.html',
  styleUrls: ['./set-stats.component.css'],
  providers: []
})
export class SetStatsComponent implements OnInit {
  hitPoints = 5;
  strength= 5;
  dexterity= 5;
  intel= 5;
  defense= 5;
  attack= 5;

  constructor() {}

  ngOnInit() {
  }

}
