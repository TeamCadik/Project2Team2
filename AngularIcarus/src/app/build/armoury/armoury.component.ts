import { Component, OnInit } from '@angular/core';
import { BuildService } from '../shared/build.service';
import { Build } from '../shared/build';

@Component({
  selector: 'app-armoury',
  templateUrl: './armoury.component.html',
  styleUrls: ['./armoury.component.css']
})
export class ArmouryComponent implements OnInit {
  public builds: Build[];
  constructor(private buildService: BuildService) { }

  ngOnInit() {
    this.buildService.getBuilds().subscribe(builds=>this.builds=builds);
  }

}
