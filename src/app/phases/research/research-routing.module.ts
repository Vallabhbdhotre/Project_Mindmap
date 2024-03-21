import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchphaseComponent } from './researchphase/researchphase.component';
import { InternalComponent } from './internal/internal.component';
import { ExternalComponent } from './external/external.component';

const routes: Routes = [
  {
    path:'',component:ResearchphaseComponent,children:[
      {
        path:"internal",component:InternalComponent
      },
      {
        path:"external" , component:ExternalComponent,children:[
          {
            path:"",loadChildren:()=>import('./external-b2c/external-b2c.module').then((m)=>m.ExternalB2cModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
