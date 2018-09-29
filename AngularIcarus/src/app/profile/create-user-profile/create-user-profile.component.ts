import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfileService } from '../shared/user-profile.service';
import { Character } from '../shared/user-profile';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.css']
})
export class CreateUserProfileComponent implements OnInit {
  @Input() character: Character;
  @Output() submitted = new EventEmitter<boolean>();

  constructor(
    // private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (!this.character) {
      this.character = new Character();
    }
  }

  updateCharacter(): void {
    console.log('update character');
    this.userProfileService.updateCharacter(this.character).subscribe(
      character=>{
        this.character = character;
        this.submitted.emit(true);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }
}
