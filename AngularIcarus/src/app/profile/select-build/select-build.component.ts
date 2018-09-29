import { Component, OnInit } from '@angular/core';
import { Build } from '../../build/shared/build';
import { SelectBuildService } from '../shared/select-build.service';

@Component({
  selector: 'app-select-build',
  templateUrl: './select-build.component.html',
  styleUrls: ['./select-build.component.css']
})
export class SelectBuildComponent implements OnInit {

  builds: Build[];

  constructor(private selectBuildService: SelectBuildService) { }

  ngOnInit() {
    this.getBuilds();
  }

  getBuilds(): void {
    this.selectBuildService.getBuilds()
      .subscribe(builds => this.builds = builds);
  }
}
