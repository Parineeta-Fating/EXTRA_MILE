import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallbusroutesComponent } from './showallbusroutes.component';

describe('ShowallbusroutesComponent', () => {
  let component: ShowallbusroutesComponent;
  let fixture: ComponentFixture<ShowallbusroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallbusroutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallbusroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
