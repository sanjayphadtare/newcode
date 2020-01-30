import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadcountRoutingModule } from './headcount-routing.module';
import { HeadcountComponent } from './headcount.component';


@NgModule({
  declarations: [HeadcountComponent],
  imports: [
    CommonModule,
    HeadcountRoutingModule
  ]
})
export class HeadcountModule { }
