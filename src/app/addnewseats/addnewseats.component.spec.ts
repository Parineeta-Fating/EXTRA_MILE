import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewseatsComponent } from './addnewseats.component';

describe('AddnewseatsComponent', () => {
  let component: AddnewseatsComponent;
  let fixture: ComponentFixture<AddnewseatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewseatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
