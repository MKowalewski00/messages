import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarRoutingModule } from "./sidebar-routing.module";
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { FirstcompComponent } from './pages/firstcomp/firstcomp.component';
import { SecondcompComponent } from './pages/secondcomp/secondcomp.component';
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { InfoComponent } from './pages/info/info.component';




@NgModule({
  declarations: [
    WrapperComponent,
    FirstcompComponent,
    SecondcompComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ]
})

export class SidebarModule{}
