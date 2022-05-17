import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "managermainpage", name: "Department Performance", icon: "dashboard" },
    { link: "managerfirstpage", name: "Department Managers Performance ", icon: "account_balance" },
    { link: "app-sales-forcast", name: "Sales Forcast", icon: "assessment icon" },
    //{ link: "app-settings", name: "Settings", icon: "settings" },
    { link: "app-todo", name: "To do", icon: "assignment" },
    { link: "app-contact-list", name: "contacts", icon: "contacts" },
  ];
}
