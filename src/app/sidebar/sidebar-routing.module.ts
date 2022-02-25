import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WrapperComponent} from "./pages/wrapper/wrapper.component";
import {FirstcompComponent} from "./pages/firstcomp/firstcomp.component";
import {InfoComponent} from "./pages/info/info.component";
import {AuthGuard} from "../shared/guard/auth.guard";
import {UserinfoPageComponent} from "./pages/userinfo-page/userinfo-page.component";
import {SecondcompComponent} from "./pages/secondcomp/secondcomp.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'firstcomponent',
        component: FirstcompComponent
      },
      {
        path: 'secondcomponent',
        component: SecondcompComponent
      },
      {
        path: 'infocomponent',
        component: InfoComponent
      },
      {
        path: 'userinfo',
        component: UserinfoPageComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/firstcomponent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
