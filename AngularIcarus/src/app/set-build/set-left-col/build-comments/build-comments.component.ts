import { CommentsService } from './../../../shared/comments.service';
import { Component, OnInit, Input } from '@angular/core';
import { Comments } from '../../../shared/comment';


@Component({
  selector: 'app-build-comments',
  templateUrl: './build-comments.component.html',
  styleUrls: ['./build-comments.component.css'],
  providers: [CommentsService]
})
export class BuildCommentsComponent implements OnInit {
  txtAreaVal = '';
  comment: Comments;
  enterComments = '';

  onClickAddComment() {
    if (this.enterComments !== '') {
      this.txtAreaVal += this.enterComments + '\n';
      this.commService.currentComments += this.enterComments + '\n';
      console.log(this.commService.currentComments);
      this.commService.getComments();
      this.commService.postComments();
      this.enterComments = '';
    }
  }

  deleteComments() {
    this.txtAreaVal = '';
  }

  constructor(private commService: CommentsService) { }

  ngOnInit() {
  }

}
