import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {User} from "../../../shared/services/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userinfo-page',
  templateUrl: './userinfo-page.component.html',
  styleUrls: ['./userinfo-page.component.scss']
})
export class UserinfoPageComponent implements OnInit {


  constructor(private _authService: AuthService, private _router: Router) {
  }

  ngOnInit(): void {}

  user: User = JSON.parse(localStorage.getItem('user')!)

  displayName = this.user.displayName;
  email = this.user.email;
  uid = this.user.uid;
  emailVerified = this.user.emailVerified;



  logout() {
    this._authService.SignOut()
  }

  updateProfile() {
    this._authService.UpdateUser('bencks691');
    this._authService.ReloadUser();
  }
}
