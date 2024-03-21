import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchphaseComponent } from './researchphase/researchphase.component';
import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';


@NgModule({
  declarations: [
    ResearchphaseComponent,
    ExternalComponent,
    InternalComponent
  ],
  imports: [
    CommonModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }
