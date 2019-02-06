import { TestBed, inject } from '@angular/core/testing';

import { BusService } from './bus.service';

describe('BusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusService]
    });
  });

  it('should be created', inject([BusService], (service: BusService) => {
    expect(service).toBeTruthy();
  }));
});
