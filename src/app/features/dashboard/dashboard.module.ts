import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { GpforecastComponent } from './gpforecast/gpforecast.component';
import { Todo1Component } from './todo1/todo1.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactCreateComponent } from '../managerdashboard/contact-create/contact-create.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
@NgModule({
  declarations: [DashboardComponent, TestComponent, FirstpageComponent, GpforecastComponent, Todo1Component, ContactsComponent, CreatecontactComponent],
  imports: [CommonModule, DashboardRoutingModule, MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatTooltipModule,
  FormsModule,SidenavModule],
})
export class DashboardModule {}
