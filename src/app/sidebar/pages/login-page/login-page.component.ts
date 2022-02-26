import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)])
    }
  )

  email = ''
  password = ''

  createAccount() {
    this._authService.SignUp(this.email,this.password)
  }

  loginWithEmailandPassword() {
    this._authService.SignIn(this.email, this.password).then(()=>{
      this._router.navigate(['userinfo'])
    })
  }

}
