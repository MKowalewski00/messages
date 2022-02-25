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
        routerLink: "firstcomponent",
        icon: "filter_1",
        name: "First Component"
      },
      {
        routerLink: "userinfo",
        icon: "account_circle",
        name: "User"
      },
      {
        routerLink: "infocomponent",
        icon: "info",
        name: "Info"
      },
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
