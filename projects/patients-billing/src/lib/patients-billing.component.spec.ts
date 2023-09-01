import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsBillingComponent } from './patients-billing.component';

describe('PatientsBillingComponent', () => {
  let component: PatientsBillingComponent;
  let fixture: ComponentFixture<PatientsBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsBillingComponent]
    });
    fixture = TestBed.createComponent(PatientsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
