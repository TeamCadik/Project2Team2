import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = "Cadik's Set Builder"

  constructor(private userService: UserService) { }

  ngOnInit() {


  }

}
