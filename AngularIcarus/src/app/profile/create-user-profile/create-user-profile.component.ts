import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfileService } from '../shared/user-profile.service';
import { Character } from '../shared/user-profile';
import { Location } from '@angular/common';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.css']
})
export class CreateUserProfileComponent implements OnInit {
  @Input() character: Character;
  @Input() characters: Character[];
  @Output() submitted = new EventEmitter<boolean>();

  constructor(
    // private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (!this.character) {
      this.character = new Character(null, this.getUserId(), '', 1, 1, 2, 3, 1, 2, 3);
    }
  }

  getUserId(): number {
    return this.userService.getUser().userId;
  }

  updateCharacter(): void {
    console.log('update character');
    this.userProfileService.updateCharacter(this.character).subscribe(
      char => {
        this.characters = char;
        this.submitted.emit(true);
      }
    );
    console.log(this.character);
  }

  goBack(): void {
    this.location.back();
  }
}
