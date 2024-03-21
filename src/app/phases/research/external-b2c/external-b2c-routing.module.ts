import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2c1Component } from './b2c1/b2c1.component';
import { B2c2Component } from './b2c2/b2c2.component';
import { OnlineComponent } from './online/online.component';
import { InterviewComponent } from './interview/interview.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  {
    path: 'B2C1',
    component: B2c1Component,children:[
      {
        path:"online",component:OnlineComponent
      },
      {
        path:"interview",component:InterviewComponent
      },
      {
        path:"public_data",component:PublicDataComponent
      },
      {
      path:"health",component:HealthComponent
      }
    ]
  },
  {
    path: 'B2C2',
    component: B2c2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalB2cRoutingModule {}
