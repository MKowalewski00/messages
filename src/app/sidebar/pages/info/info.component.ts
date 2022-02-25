import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
}
