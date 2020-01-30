import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'pion-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true
  }]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {

  onChange: (_: any) => {};

  // @Input('selectedItem')
  selectedItem: Date = new Date();

  bsConfig = {
    // dateInputFormat: 'DD MMM YYYY',
    isAnimated: true,
    containerClass: 'theme-default', adaptivePosition: true
  };
  // bsValue = new Date();

  constructor() { }

  ngOnInit() {
  }

  inputClickHandler($event: MouseEvent) {
    $event.stopImmediatePropagation();
  }

  valueChanged(value: Date) {
    this.selectedItem = value;
    this.onChange(this.selectedItem);
  }

  writeValue(value: Date) {
    this.selectedItem = value;
  }

  registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  registerOnTouched() {}

}
