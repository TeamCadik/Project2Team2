import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-build-comments',
  templateUrl: './build-comments.component.html',
  styleUrls: ['./build-comments.component.css']
})
export class BuildCommentsComponent implements OnInit {
  txtAreaVal = '';

  enterComments = '';


  onClickAddComment() {
    if (this.enterComments !== '') {
      this.txtAreaVal += this.enterComments + '\n';
      this.enterComments = '';
    }
  }

  deleteComments() {
    this.txtAreaVal = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
