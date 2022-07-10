import { TestBed } from '@angular/core/testing';

import { DonateserviceService } from './donateservice.service';

describe('DonateserviceService', () => {
  let service: DonateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
