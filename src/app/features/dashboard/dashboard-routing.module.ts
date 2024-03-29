import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from '../managerdashboard/contact-create/contact-create.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { GpforecastComponent } from './gpforecast/gpforecast.component';
import { TestComponent } from './test/test.component';
import { Todo1Component } from './todo1/todo1.component';


const routes: Routes = [
  { path: '', component:DashboardComponent,children:[
  {path:'',component:FirstpageComponent},
  {path:'test',component:TestComponent},
  {path:'firstpage', component: FirstpageComponent},
  {path:'app-todo1', component: Todo1Component},
  { path:'app-gpforecast', component:GpforecastComponent},
  { path:'app-contacts', component:ContactsComponent}
] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
