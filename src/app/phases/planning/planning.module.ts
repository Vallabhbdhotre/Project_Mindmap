import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningphaseComponent } from './planningphase/planningphase.component';
import { PrdComponent } from './prd/prd.component';
import { SpecsComponent } from './specs/specs.component';

console.warn('plan loaded')
@NgModule({
  declarations: [
    PlanningphaseComponent,
    PrdComponent,
    SpecsComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
