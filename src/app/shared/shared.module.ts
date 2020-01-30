import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabsComponent } from './components/menu-tabs/menu-tabs.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MenuTabsComponent, DropdownComponent, DatepickerComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule,
    BsDatepickerModule,
    AccordionModule,
    MenuTabsComponent,
    DropdownComponent,
    DatepickerComponent
  ]
})
export class SharedModule { }
