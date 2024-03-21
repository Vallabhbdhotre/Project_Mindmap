import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdashboardRoutingModule } from './mdashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MdashboardRoutingModule
  ]
})
export class MdashboardModule { }
