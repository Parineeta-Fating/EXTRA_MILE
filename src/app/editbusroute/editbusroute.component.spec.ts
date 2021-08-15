import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbusrouteComponent } from './editbusroute.component';

describe('EditbusrouteComponent', () => {
  let component: EditbusrouteComponent;
  let fixture: ComponentFixture<EditbusrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbusrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
