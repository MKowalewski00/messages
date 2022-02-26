import {Component} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})


export class WrapperComponent{

  // constructor(private _authService: AuthService) {
  // }
  //
  // ngOnInit() {
  //   if(this._authService.isLoggedIn) {
  //     this.isLoggedin = true
  //   } else {
  //     this.isLoggedin = false
  //   }
  // }

  // isLoggedin: boolean = false
  isExpanded: boolean = false;
  menu: MenuType[] =
    [
      {
        routerLink: "login",
        icon: "person",
        name: "Login"
      },
      {
        routerLink: "userinfo",
        icon: "account_circle",
        name: "User Panel"
      },
      {
        routerLink: "infocomponent",
        icon: "info",
        name: "Info"
      },
      {
        routerLink: 'messages',
        icon: 'message',
        name: 'Messages'
      }
    ];
  // menuLoggedIn: MenuType[] = [
  //   {
  //     routerLink: "firstcomponent",
  //     icon: "filter_3",
  //     name: "First Component"
  //   },
  //   {
  //     routerLink: "firstcomponent",
  //     icon: "filter_3",
  //     name: "First Component"
  //   },
  // ]

}

interface MenuType {
  routerLink: string,
  icon: string,
  name: string
}
