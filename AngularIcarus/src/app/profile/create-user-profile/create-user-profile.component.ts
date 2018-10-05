import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfileService } from '../shared/user-profile.service';
import { Character } from '../shared/user-profile';
import { Location } from '@angular/common';
import { UserService } from '../../shared/user/user.service';
import { UserProfileComponent } from './../user-profile/user-profile.component';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.css']
})
export class CreateUserProfileComponent implements OnInit {
  @Input() character: Character;
  @Input() characters: Character[];
  @Output() submitted = new EventEmitter<boolean>();
  img = 'https://static.bandainamcoent.eu/high/dark-souls/dark-souls-hd/00-page-setup/ds-hd_game_thumb_408x314.jpg';

  hitPoints = 5;
  strength = 5;
  dexterity = 5;
  intel = 5;
  defense = 5;
  attack = 5;

  constructor(
    // private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private location: Location,
    private userService: UserService,
    private userProfile: UserProfileComponent
  ) {}

  ngOnInit(): void {
    if (!this.character) {
      this.character = new Character(null, this.getUserId(), '', 1, 1, 2, 3, 1, 2, 3, this.img);
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
