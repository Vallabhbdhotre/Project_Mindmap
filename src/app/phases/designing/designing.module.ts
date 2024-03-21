import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesigningRoutingModule } from './designing-routing.module';
import { DesigningphaseComponent } from './designingphase/designingphase.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareComponent } from './software/software.component';


@NgModule({
  declarations: [
    DesigningphaseComponent,
    HardwareComponent,
    SoftwareComponent
  ],
  imports: [
    CommonModule,
    DesigningRoutingModule
  ]
})
export class DesigningModule { }
