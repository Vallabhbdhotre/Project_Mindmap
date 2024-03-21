import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesigningphaseComponent } from './designingphase/designingphase.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {
    path:'' ,component:DesigningphaseComponent,children:[
      {
        path:"hardware",component:HardwareComponent
      },
      {
        path:"software",component:SoftwareComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesigningRoutingModule { }
