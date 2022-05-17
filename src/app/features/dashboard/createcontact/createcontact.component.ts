import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/contacts.service';

@Component({
  selector: '<createcontact>',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  contact : {id: any, name: any, description: any, email: any, phone:any} = {id: null, name: "", description: "", email: "", phone:""};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createContact(){
    console.log(this.contact);

    this.contact = {id: null, name: "", description: "", email: "",phone:""};
    this.dataService.createContact(this.contact);
  }
}
