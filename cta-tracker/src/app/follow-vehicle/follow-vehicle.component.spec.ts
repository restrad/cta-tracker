import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowVehicleComponent } from './follow-vehicle.component';

describe('FollowVehicleComponent', () => {
  let component: FollowVehicleComponent;
  let fixture: ComponentFixture<FollowVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
