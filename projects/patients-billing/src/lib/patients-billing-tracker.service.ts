import { inject } from "@angular/core";
import { PatientsBillingService } from "./patients-billing.service";
import { Patient } from "@app/features/patients/patients.interface";
import { PatientsTrackerService } from "@app/features/patients/patients-tracker.service";

export class PatientsBillingTracker extends PatientsTrackerService {
  private billing = inject(PatientsBillingService);

  start(patient?: Patient): void {
    if (!patient) return;
    const time = this.patientsTime.get(patient.id);
    this.billing.timeRegistry$.next(time);

    if (!this.view) return;
    this.billing.startTracking(this.view)

    this.billing.timerStart$.next(time || 0);
  }

  stop(patient?: Patient): void {
    if (!this.view) return;
    this.billing.stopTracking(this.view)

    if (!patient) return;
    const time = this.billing.timeRegistry$.getValue();
    this.patientsTime.set(patient?.id, time)
  }
}