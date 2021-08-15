import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpassengerComponent } from './searchpassenger.component';

describe('SearchpassengerComponent', () => {
  let component: SearchpassengerComponent;
  let fixture: ComponentFixture<SearchpassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
