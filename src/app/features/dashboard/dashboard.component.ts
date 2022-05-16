import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  user: any;
  username :string;

  ngOnInit(): void {
    this.getuser();
  }
  getuser(){
    let user:any = localStorage.getItem("user");
    this.user = JSON.parse(user);
    this.username =user.email.str.split("@");
     console.log(user);
  }
  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

  public isExpanded =false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
