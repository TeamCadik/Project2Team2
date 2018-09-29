import { Component, OnInit, Input } from '@angular/core';
import { CreateUserProfileService } from '../shared/create-user-profile.service';
import { Character } from '../shared/user-profile';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.css']
})
export class CreateUserProfileComponent implements OnInit {
  @Input() character: Character;

  submitted = false;

  ngOnInit(): void {
    if (!this.character) {
      this.character = new Character();
    }
  }

  onSubmit() { this.submitted = true; }

}
