import { ViewContainerRef } from '@angular/core';
import { Patient } from './patients.interface';

/**
 * Patients service.
 * Defines base logic to work with the patient.
 */
export abstract class PatientsTrackerService {
  protected view?: ViewContainerRef;
  protected patientsTime = new Map();

  setView(view: ViewContainerRef): void {
    this.view = view;
  }

  abstract start(patient?: Patient): void
  abstract stop(patient?: Patient): void
}
