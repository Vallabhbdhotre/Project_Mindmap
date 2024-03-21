import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesMarketingComponent } from './sales-marketing/sales-marketing.component';
import { OnlineComponent } from './online/online.component';
import { DealearshipComponent } from './dealearship/dealearship.component';

const routes: Routes = [
  {
    path:'',component:SalesMarketingComponent,children:[
      {
        path:"online", component:OnlineComponent
      },
      {
        path:"dealearship",component:DealearshipComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
