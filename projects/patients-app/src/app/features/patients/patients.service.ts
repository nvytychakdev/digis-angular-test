import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Patient } from './patients.interface';
import { PATIENTS } from './patients.mock';

/**
 * Patients service.
 * Defines base logic to work with the patient.
 */
@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private readonly patient$ = new BehaviorSubject<Patient | null>(null);
  private readonly patients$ = new BehaviorSubject<Patient[]>(PATIENTS);

  /**
   * All patients list stream.
   */
  get allPatients$(): Observable<Patient[]> {
    return this.patients$.asObservable()
  }

  /**
   * All patients list.
   */
  get allPatients(): Patient[] | null {
    return this.patients$.getValue();
  }

  /**
   * Currently selected patient stream.
   */
  get selectedPatient$(): Observable<Patient | null> {
    return this.patient$.asObservable()
  }

  /**
   * Currently selected patient.
   */
  get selectedPatient(): Patient | null {
    return this.patient$.getValue();
  }

  /**
   * Set selected patient.
   * Notifies all subscription about patient selection changes.
   * 
   * @param patient - selected patient
   */
  setSelectedPatient(patient: Patient): void {
    this.patient$.next(patient);
  }

  /**
   * Reset patient's selection.
   * Any time user gets navigated out of the patient's overview,
   * patient needs to be reset to the default state.
   */
  resetSelectedPatient(): void {
    this.patient$.next(null);
  }
}
