import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpassengerComponent } from './showpassenger.component';

describe('ShowpassengerComponent', () => {
  let component: ShowpassengerComponent;
  let fixture: ComponentFixture<ShowpassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
