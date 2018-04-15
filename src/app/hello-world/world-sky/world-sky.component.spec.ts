import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldSkyComponent } from './world-sky.component';

describe('WorldSkyComponent', () => {
  let component: WorldSkyComponent;
  let fixture: ComponentFixture<WorldSkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldSkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldSkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
