import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/contacts.service';
declare let $: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any;
  selectedContact:any



  constructor(public dataService: DataService, public router : Router) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
  }
  public selectContact(contact: any){
    //this.selectedContact = contact;

    this.dataService.deletecontaact(contact);
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


