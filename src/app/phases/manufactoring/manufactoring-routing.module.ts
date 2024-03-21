import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemanufacturingComponent } from './demanufacturing/demanufacturing.component';
import { MaterialComponent } from './material/material.component';
import { ProductionComponent } from './production/production.component';

const routes: Routes = [
  {
    path:'',component:DemanufacturingComponent,children:[
      {
        path:"material",component:MaterialComponent
      },
      {
        path:"production",component:ProductionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufactoringRoutingModule { }
