import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningphaseComponent } from './planningphase/planningphase.component';
import { PrdComponent } from './prd/prd.component';
import { SpecsComponent } from './specs/specs.component';

const routes: Routes = [
  {
    path:'' ,component:PlanningphaseComponent,children:[
      {
        path:'prd',component:PrdComponent
      },
      {
        path:'specs',component:SpecsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
