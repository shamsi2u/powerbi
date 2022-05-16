import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  user: any;
  username: any;

  constructor(
     private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getuser();
  }

  getuser(){

    let user:any  = localStorage.getItem("user");
    this.user = JSON.parse(user);
    console.log(user);
    let email = this.authService.getUser()?.email;
    this.username = email?.split("@")[0];
     console.log(this.username);
  }
}
