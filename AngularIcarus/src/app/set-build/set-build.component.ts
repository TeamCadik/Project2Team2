import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-build',
  templateUrl: './set-build.component.html',
  styleUrls: ['./set-build.component.css']
})
export class SetBuildComponent implements OnInit {
  charLvl: number;

  constructor() { }

  ngOnInit() {
  }

  receiveCharLevel($event) {
    this.charLvl = $event;
  }
}
