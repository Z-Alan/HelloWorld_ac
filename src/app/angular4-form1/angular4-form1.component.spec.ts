import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4Form1Component } from './angular4-form1.component';

describe('Angular4Form1Component', () => {
  let component: Angular4Form1Component;
  let fixture: ComponentFixture<Angular4Form1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular4Form1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular4Form1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
