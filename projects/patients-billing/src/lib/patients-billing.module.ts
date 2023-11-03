import { NgModule } from '@angular/core';
import { PatientsBillingComponent } from './patients-billing.component';
import { PatientsBillingService } from './patients-billing.service';
import { PatientsBillingTracker } from './patients-billing-tracker.service';
import { PatientsTrackerService } from '@app/features/patients/patients-tracker.service';



@NgModule({
  providers: [PatientsBillingService, {provide: PatientsTrackerService, useClass: PatientsBillingTracker}],
  imports: [
    PatientsBillingComponent
  ],
  exports: [
    PatientsBillingComponent
  ]
})
export class PatientsBillingModule { }
