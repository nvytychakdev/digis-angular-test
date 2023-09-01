import { TestBed } from '@angular/core/testing';

import { PatientsBillingService } from './patients-billing.service';

describe('PatientsBillingService', () => {
  let service: PatientsBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
