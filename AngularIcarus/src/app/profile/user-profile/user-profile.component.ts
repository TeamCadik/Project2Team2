import { UserService } from './../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/user-profile';
import { UserProfileService } from '../shared/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  characters: Character[];

  constructor(private userProfileService: UserProfileService,
    private userService: UserService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.userProfileService.getCharacters(this.userService.getUser().userId)
      .subscribe(characters => this.characters = characters);
  }
}
