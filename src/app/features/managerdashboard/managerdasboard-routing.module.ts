import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManagerdashboardComponent } from './managerdashboard.component';
import { ManagermainpageComponent } from './managermainpage/managermainpage.component';
import { ManagerfirstpageComponent } from './managerfirstpage/managerfirstpage.component';
import { SettingsComponent } from './settings/settings.component';
import { TodoComponent } from './todo/todo.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { SalesforcastComponent } from './salesforcast/salesforcast.component';



const routes: Routes = [
  { path: '', component:ManagerdashboardComponent,children:[
  {path:'',component:ManagermainpageComponent},
  {path:'managermainpage',component:ManagermainpageComponent},
  {path:'managerfirstpage', component:ManagerfirstpageComponent},
  {path:'app-settings', component:SettingsComponent},
  {path:'app-todo', component:TodoComponent},
  {path:'app-contact-list', component:ContactListComponent},
  {path:'<app-contact-create></app-contact-create>', component:ContactCreateComponent},
  {path:'app-sales-forcast', component:SalesforcastComponent
  },
]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ManagerdasboardRoutingModule { }
