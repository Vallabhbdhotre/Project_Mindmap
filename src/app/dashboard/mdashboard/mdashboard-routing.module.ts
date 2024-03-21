import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'research',
    loadChildren: () =>
      import('./../../phases/research/research.module').then(
        (m) => m.ResearchModule
      ),
  },
  {
    path: 'planning',
    loadChildren: () =>
      import('./../../phases/planning/planning.module').then(
        (m) => m.PlanningModule
      ),
  },
  {
    path: 'designing',
    loadChildren: () =>
      import('./../../phases/designing/designing.module').then(
        (m) => m.DesigningModule
      ),
  },
  {
    path: 'manufacturing',
    loadChildren: () =>
      import('./../../phases/manufactoring/manufactoring.module').then(
        (m) => m.ManufactoringModule
      ),
  },
  {
    path: 'sales&marketing',
    loadChildren: () =>
      import('./../../phases/sales/sales.module').then((m) => m.SalesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdashboardRoutingModule {}
