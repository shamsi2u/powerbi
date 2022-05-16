import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "firstpage", name: "Sales Performance Overview ", icon: "timeline" },
    { link: "test", name: "Quaterly Performance ", icon: "trending_up" },
    { link: "app-gpforecast", name: "GP% Forecast", icon: "assessment icon" },
    { link: "app-todo1", name: "To Do", icon: "assignment" },
  ];
}
