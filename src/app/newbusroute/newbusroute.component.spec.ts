import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbusrouteComponent } from './newbusroute.component';

describe('NewbusrouteComponent', () => {
  let component: NewbusrouteComponent;
  let fixture: ComponentFixture<NewbusrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbusrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
