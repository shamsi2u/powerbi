import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerdashboardComponent } from './managerdashboard.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ManagerdasboardRoutingModule } from './managerdasboard-routing.module';
import { SidenavModule } from '../dashboard/sidenav/sidenav.module';
import { ManagermainpageComponent } from './managermainpage/managermainpage.component';
import { NavComponent } from './nav/nav.component';
import { ManagerfirstpageComponent } from './managerfirstpage/managerfirstpage.component';
import { SettingsComponent } from './settings/settings.component';
import { TodoComponent } from './todo/todo.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { SalesforcastComponent } from './salesforcast/salesforcast.component';
//import { NgxFloatButtonModule } from 'ngx-float-button';



@NgModule({
  declarations: [ManagerdashboardComponent, ManagermainpageComponent,NavComponent, ManagerfirstpageComponent, SettingsComponent, TodoComponent, ContactListComponent, ContactCreateComponent, SalesforcastComponent],
  imports: [
    CommonModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatTooltipModule,
    FormsModule,
    ManagerdasboardRoutingModule,SidenavModule,
  ]
})
export class ManagerdashboardModule { }
