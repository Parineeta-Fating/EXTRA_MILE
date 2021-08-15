import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallbusesComponent } from './showallbuses.component';

describe('ShowallbusesComponent', () => {
  let component: ShowallbusesComponent;
  let fixture: ComponentFixture<ShowallbusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallbusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
