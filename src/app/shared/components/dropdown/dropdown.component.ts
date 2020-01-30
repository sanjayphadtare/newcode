import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pion-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  onChange: (_: any) => {};

  @Input('items')
  items: Array<app.MenuItem> = [];

  @Input('selectedItem')
  selectedItem: app.MenuItem;
  
  constructor() { }

  ngOnInit() {
  }

  valueChanged($event: any) {
    this.selectedItem = this.items.find(item => item.value === $event.target.value);
    this.onChange(this.selectedItem);
  }

  writeValue(value: app.MenuItem) {
    this.selectedItem = value;
  }

  registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  registerOnTouched() {}

}
