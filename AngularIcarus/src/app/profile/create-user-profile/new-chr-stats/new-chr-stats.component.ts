import { Character } from './../../shared/user-profile';
import { CreateUserProfileComponent } from './../create-user-profile.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-chr-stats',
  templateUrl: './new-chr-stats.component.html',
  styleUrls: ['./new-chr-stats.component.css']
})
export class NewChrStatsComponent implements OnInit {

  hitPoints = 5;
  strength = 5;
  dexterity = 5;
  intel = 5;
  defense = 5;
  attack = 5;
  @Input() chr: Character = new Character(null, null, null, null, null, null, null, null, null, null, null);
  constructor(private char: CreateUserProfileComponent) { }

  ngOnInit() {

  }

  updateLevel() {
    this.chr.characterlevel = this.char.character.characterlevel;
  }

}
