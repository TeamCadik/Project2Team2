import { Router } from '@angular/router';
import { Character } from './../../../profile/shared/user-profile';
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

  commArray: Comments[];
  enterComments = '';
  buildId = 1;
  href = '';

  dummyText = '';

  ngOnInit() {
    this.getCharIdFromUrl();

    this.commService.getComments(this.buildId).subscribe(comms => this.commArray = comms);
    // console.log(this.commArray);
  }

  onClickAddComment() {
    if (this.enterComments !== '') {
      this.comment.commentStr += this.enterComments + '\n';
      // this.commService.currentComments += this.enterComments + '\n';
      // this.commService.comment.comment = this.txtAreaVal;
      this.comment.buildId = this.buildId;
      console.log(this.comment.commentStr);
      this.commService.postComments(this.comment).subscribe(comms => this.commArray = comms);
      // console.log(this.commArray);
      this.constString(this.commArray);
      this.enterComments = '';
    }
  }

  deleteComments() {
    this.comment.commentStr = '';
  }

  onClickGetComments() {
    this.commService.getComments(this.buildId).subscribe(comms => this.commArray = comms);
    console.log(this.commArray);
    this.constString(this.commArray);
  }

  constString(commsArr: Comments[]) {
    console.log(commsArr);
    if (commsArr !== undefined) {
      for (const i of commsArr) {
        if (i.commentStr == null) {
          this.comment.commentStr += '';
        }
        this.comment.commentStr += i.commentStr;
      }
    }
  }
  constructor(private commService: CommentsService, private urlRouter: Router) { }

  getCharIdFromUrl() {
    this.href = this.urlRouter.url;
    console.log(this.href);
    this.dummyText = this.href.slice(11);
    console.log(this.dummyText);
    this.commService.character.characterId = +this.dummyText;
    console.log(this.commService.character.characterId);
    this.buildId = this.commService.character.characterId;
    console.log(this.buildId);
  }

}
