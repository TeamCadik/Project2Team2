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
  @Input() comment: Comments;
  enterComments = '';

  onClickAddComment() {
    if (this.comment.comment !== '') {
      this.txtAreaVal += this.comment.comment + '\n';
      this.commService.postComments();
      this.comment.comment = '';
    }
  }

  deleteComments() {
    this.txtAreaVal = '';
  }

  constructor(private commService: CommentsService) { }

  ngOnInit() {
  }

}
