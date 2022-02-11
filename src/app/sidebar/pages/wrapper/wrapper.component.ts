import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})



export class WrapperComponent implements OnInit {

  isExpanded: boolean = false;
  menu: {routerl: string, icon: string, name: string}[] =
    [
      {
        routerl: "firstcomponent",
        icon: "filter_1",
        name: "First Component"
      },
      {
        routerl: "secondcomponent",
        icon: "filter_2",
        name: "Second Component"
      },
      {
        routerl: "infocomponent",
        icon: "info",
        name: "Info"
      },
    ];

  constructor() {}

  ngOnInit(): void {
  }



}
