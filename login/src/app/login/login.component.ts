import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../shared/user/current-user';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedInUser: CurrentUser;
  public username: string;
  public password: string;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.login(null, null).subscribe(user => {
      this.loggedInUser = user;
    });

  }

  login(): void {
    console.log(this.username + ' ' + this.password);
    this.userService.login(this.username, this.password).subscribe(
      user => {
        this.loggedInUser = user;
      });
  }
  logout(): void {
    this.userService.logout().subscribe();
    this.loggedInUser = null;
    this.username = null;
    this.password = null;
  }

}
