import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldGroundComponent } from './world-ground.component';

describe('WorldGroundComponent', () => {
  let component: WorldGroundComponent;
  let fixture: ComponentFixture<WorldGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
