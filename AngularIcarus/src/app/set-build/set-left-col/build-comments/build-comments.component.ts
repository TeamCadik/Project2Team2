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
  @Input() comment: Comments = new Comments();
  enterComments = '';
  buildId = 1;

  onClickAddComment() {
    if (this.enterComments !== '') {
      this.comment.commentStr += this.enterComments + '\n';
      // this.commService.currentComments += this.enterComments + '\n';
      // this.commService.comment.comment = this.txtAreaVal;
      this.comment.buildId = this.buildId;
      console.log(this.comment.commentStr);
      this.commService.postComments(this.comment).subscribe(
        (Response) => console.log(Response),
        (error) => console.error(error)
      );
      this.enterComments = '';
    }
  }

  deleteComments() {
    this.comment.commentStr = '';
  }

  onClickGetComments() {

  }

  constructor(private commService: CommentsService) { }

  ngOnInit() {
  }

}
