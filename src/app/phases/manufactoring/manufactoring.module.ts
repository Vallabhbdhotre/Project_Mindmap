import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufactoringRoutingModule } from './manufactoring-routing.module';
import { DemanufacturingComponent } from './demanufacturing/demanufacturing.component';
import { MaterialComponent } from './material/material.component';
import { ProductionComponent } from './production/production.component';


@NgModule({
  declarations: [
    DemanufacturingComponent,
    MaterialComponent,
    ProductionComponent
  ],
  imports: [
    CommonModule,
    ManufactoringRoutingModule
  ]
})
export class ManufactoringModule { }
