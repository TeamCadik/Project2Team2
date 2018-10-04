import { Component, OnInit } from '@angular/core';
import { BuildService } from '../shared/build.service';
import { ArmourService } from '../../view-items/shared/armour.service';
import { Build } from '../shared/build';
import { Armour } from '../shared/armour';

@Component({
  selector: 'app-armoury',
  templateUrl: './armoury.component.html',
  styleUrls: ['./armoury.component.css']
})
export class ArmouryComponent implements OnInit {
  public builds: Build[];
  public armours: Armour[];
  constructor(private buildService: BuildService,
    private armourService: ArmourService) { }

  ngOnInit() {
    this.buildService.getBuilds().subscribe(builds => this.builds = builds);
  }
}
