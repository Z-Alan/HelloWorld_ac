import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ParentChildComponent} from './parent-child.component';

describe('ParentChildComponent', () => {
  let component: ParenChildComponent;
  let fixture: ComponentFixture<ParenChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
