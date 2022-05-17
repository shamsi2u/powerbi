import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com", phone:"0562845616"},
    {id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com",phone:"0588808212"},
    {id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com", phone:"0596179610"},
    {id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com",phone:"0561719610"}
  ];

  constructor() { }

  public getContacts():Array<{id: any, name: any, description: any, email: any ,phone:any}>{
    return this.contacts;
  }
  public createContact(contact: {id: any, name: any, description: any, email: any,phone:any}){
    this.contacts.push(contact);
  }

  public deletecontaact(contact: {id: any, name: any, description: any, email: any,phone:any}){

    for( var i = 0; i < this.contacts.length; i++){

      if ( this.contacts[i] === contact) {

          this.contacts.splice(i, 1);
          console.log(this.contacts);
      }
  }
}
}
