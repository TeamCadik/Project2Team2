import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Character } from './../../../profile/shared/user-profile';
import { ModdingService } from '../../modding.service'

import { UserProfileService }  from './../../../profile/shared/user-profile.service';


@Component({
  selector: 'app-set-stats',
  templateUrl: './set-stats.component.html',
  styleUrls: ['./set-stats.component.css'],
  providers: []
})
export class SetStatsComponent implements OnInit {
  
  @Input() character: Character;
  public charMod: Character;
  constructor(
    private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private moddingService: ModdingService) {}
   
    ngOnInit(): void {
      this.getCharacter();
      this.charMod = this.moddingService.getCharMod();
    }
  
    getCharMod(){
      this.charMod = this.moddingService.getCharMod();
    }
    getCharacter(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.userProfileService.getCharacter(id)
        .subscribe(character => this.character = character);
    }
}
