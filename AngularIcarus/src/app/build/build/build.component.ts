import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Build } from '../shared/build';
import { BuildService } from '../shared/build.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  @Input() openBuild: Build;

  constructor(
    private buildService: BuildService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      if (id) {
        this.buildService.getBuild(id).subscribe(
          build => {
            this.openBuild = build;
          }
        )
      }
    }
}
