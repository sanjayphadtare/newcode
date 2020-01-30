import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcountComponent } from './headcount.component';

describe('HeadcountComponent', () => {
  let component: HeadcountComponent;
  let fixture: ComponentFixture<HeadcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
