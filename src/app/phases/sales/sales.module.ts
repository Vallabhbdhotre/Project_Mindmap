import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesMarketingComponent } from './sales-marketing/sales-marketing.component';
import { OnlineComponent } from './online/online.component';
import { DealearshipComponent } from './dealearship/dealearship.component';


@NgModule({
  declarations: [
    SalesMarketingComponent,
    OnlineComponent,
    DealearshipComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
