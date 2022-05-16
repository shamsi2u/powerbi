import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,MatSidenavModule,MatIconModule,MatListModule,MatTooltipModule,
    FormsModule,RouterModule
  ],
  exports:[SidenavComponent]
})
export class SidenavModule { }
