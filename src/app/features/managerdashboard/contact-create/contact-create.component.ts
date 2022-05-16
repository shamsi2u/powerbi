import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/contacts.service';

@Component({
  selector: '<app-contact-create></app-contact-create>',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

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
