import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from '../patients.interface';
import { PatientsService } from '../patients.service';

const PATIENTS_LIST_COLUMNS = ['name', 'height', 'weight', 'steps', 'sleep'] as const;

/**
 * Patients list table.
 * Component provides list of patients as a table.
 * On patient selection user gets navigated to patient's overview page.
 */
@Component({
  selector: 'app-patients-list-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './patients-list-table.component.html',
  styleUrls: ['./patients-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsListTableComponent {
  private readonly router = inject(Router);
  private readonly patients = inject(PatientsService);

  /**
   * Columns to display on patients list table.
   */
  displayedColumns = PATIENTS_LIST_COLUMNS;

  /**
   * Source of data for patients list.
   */
  dataSource = this.patients.allPatients$;

  /**
   * On patient selected.
   * Handler fired once patient gets selected from the list.
   * 
   * @param patient - selected patient
   */
  onPatientSelected(patient: Patient) {
    this.router.navigate([patient.id])
  }
}
