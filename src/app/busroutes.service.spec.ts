import { TestBed } from '@angular/core/testing';

import { BusroutesService } from './busroutes.service';

describe('BusroutesService', () => {
  let service: BusroutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusroutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
