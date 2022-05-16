import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'managerfirstpage',
  templateUrl: './managerfirstpage.component.html',
  styleUrls: ['./managerfirstpage.component.css']
})
export class ManagerfirstpageComponent implements OnInit {
  username :string;
  user: any;

  constructor() { }

  ngOnInit(): void {
  }
  getuser(){
    let user:any = localStorage.getItem("user");
    this.user = JSON.parse(user);
    this.username =user.email.split("@");
     console.log(user);
  }
}
