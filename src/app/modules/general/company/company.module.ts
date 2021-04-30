import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  exports: [
    CompanyComponent
  ],
  declarations: [
    CompanyComponent
  ],
  providers: [
  ],
})
export class CompanyModule { }
