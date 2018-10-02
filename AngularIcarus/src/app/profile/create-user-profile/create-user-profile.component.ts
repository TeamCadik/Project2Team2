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
      this.character = new Character(null, 1, '', 1, 1, 2, 3, 1, 2, 3);
    }
  }

  updateCharacter(): void {
    console.log('update character');
    this.userProfileService.updateCharacter(this.character).subscribe(
      character => {
        this.character = character;
        this.submitted.emit(true);
      }
    );
    console.log(this.character);
  }

  goBack(): void {
    this.location.back();
  }
}
