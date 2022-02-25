import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarRoutingModule } from "./sidebar-routing.module";
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { InfoComponent } from './pages/info/info.component';
import {FirstcompComponent} from "./pages/firstcomp/firstcomp.component";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../../environments/environment";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "../shared/services/auth.service";
import {AuthGuard} from "../shared/guard/auth.guard";
import { UserinfoPageComponent } from './pages/userinfo-page/userinfo-page.component';
import {SecondcompComponent} from "./pages/secondcomp/secondcomp.component";




@NgModule({
  declarations: [
    WrapperComponent,
    FirstcompComponent,
    SecondcompComponent,
    InfoComponent,
    UserinfoPageComponent
  ],
    imports: [
        CommonModule,
        SidebarRoutingModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
  providers: [
    AuthService,
    AuthGuard
  ]
})

export class SidebarModule{}
