import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { User } from '../../shared/user/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedUser: User;
  public username: string;
  public password: string;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.userService.login(null, null).subscribe( user => {
      this.loggedUser = user;
    });
  }

  login(): void {
    console.log(this.username+' '+this.password);
    this.userService.login(this.username, this.password).subscribe(
      user => {
        this.loggedUser = user;
      });
  }
  logout(): void {
    this.userService.logout().subscribe();
    this.loggedUser = null;
    this.username = null;
    this.password = null;
    this.router.navigate(['']);

  }
}
