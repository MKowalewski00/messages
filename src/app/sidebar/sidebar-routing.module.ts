import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WrapperComponent} from "./pages/wrapper/wrapper.component";
import {FirstcompComponent} from "./pages/firstcomp/firstcomp.component";
import {SecondcompComponent} from "./pages/secondcomp/secondcomp.component";
import {InfoComponent} from "./pages/info/info.component";

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
