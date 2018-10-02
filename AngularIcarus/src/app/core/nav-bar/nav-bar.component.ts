import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = "Cadik's Set Builder"

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {


  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  isProfilePage(): boolean {
    if (this.router.url.includes('/profile')){
      return true;
    }
    return false;
  }

}
