import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalB2cRoutingModule } from './external-b2c-routing.module';
import { B2c1Component } from './b2c1/b2c1.component';
import { B2c2Component } from './b2c2/b2c2.component';
import { OnlineComponent } from './online/online.component';
import { InterviewComponent } from './interview/interview.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { HealthComponent } from './health/health.component';
import { ComponentsinfoService } from './componentsinfo.service';
import { TooltipComponent } from './tooltip/tooltip.component';

console.warn("B2C loaded")
@NgModule({
  declarations: [
    B2c1Component,
    B2c2Component,
    OnlineComponent,
    InterviewComponent,
    PublicDataComponent,
    HealthComponent,
    TooltipComponent,
  ],
  imports: [
    CommonModule,
    ExternalB2cRoutingModule
  ],
  providers:[
    ComponentsinfoService
  ]
})
export class ExternalB2cModule { }
