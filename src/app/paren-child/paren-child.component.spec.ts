import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenChildComponent } from './paren-child.component';

describe('ParenChildComponent', () => {
  let component: ParenChildComponent;
  let fixture: ComponentFixture<ParenChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
