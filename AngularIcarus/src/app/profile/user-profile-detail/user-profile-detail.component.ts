import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../shared/user-profile';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserProfileService }  from '../shared/user-profile.service';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.css']
})
export class UserProfileDetailComponent implements OnInit {

  @Input() character: Character;

  constructor(
    private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userProfileService.getCharacter(id)
      .subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }
}
