import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NgxFloatButtonComponent } from 'ngx-float-button';
import { DataService } from 'src/app/services/contacts.service';
//import {NgxFloatButtonComponent} from 'ngx-float-button'
declare let $: any;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any;
  selectedContact: any;

  constructor(public dataService: DataService, public router : Router) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }
  public selectContact(contact: any){
    this.selectedContact = contact;
  }
  addContact(){


    //$('#exampleModal').modal('show')
    $('#exampleModal').appendTo("body").modal('show');
     // this.router.navigate(['/app-contact-create']);
  }
  close_moadal(){
    $('#exampleModal').appendTo("body").modal('hide');
  }
}
