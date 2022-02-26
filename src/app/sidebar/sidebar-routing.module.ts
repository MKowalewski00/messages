import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WrapperComponent} from "./pages/wrapper/wrapper.component";
import {InfoComponent} from "./pages/info/info.component";
import {AuthGuard} from "../shared/guard/auth.guard";
import {UserinfoPageComponent} from "./pages/userinfo-page/userinfo-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {MessagesComponent} from "./pages/messages/messages.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'infocomponent',
        component: InfoComponent
      },
      {
        path: 'userinfo',
        component: UserinfoPageComponent,
        canActivate: [AuthGuard]
      },
      {
       path: 'messages',
       component: MessagesComponent,
       canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
