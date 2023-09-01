import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Patient } from './patients.interface';
import { PATIENTS } from './patients.mock';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private readonly patient$ = new BehaviorSubject<Patient | null>(null);
  private readonly patients$ = new BehaviorSubject<Patient[]>(PATIENTS);

  get allPatients$(): Observable<Patient[]> {
    return this.patients$.asObservable()
  }

  get allPatients(): Patient[] | null {
    return this.patients$.getValue();
  }

  get selectedPatient$(): Observable<Patient | null> {
    return this.patient$.asObservable()
  }

  get selectedPatient(): Patient | null {
    return this.patient$.getValue();
  }

  setSelectedPatient(patient: Patient): void {
    this.patient$.next(patient);
  }

  resetSelectedPatient(): void {
    this.patient$.next(null);
  }
}
