import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from '../patients.interface';
import { PatientsService } from '../patients.service';

const PATIENTS_LIST_COLUMNS = ['name', 'height', 'weight', 'steps', 'sleep'] as const;

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

  displayedColumns = PATIENTS_LIST_COLUMNS;

  dataSource = this.patients.allPatients$;

  onPatientSelected(patient: Patient) {
    this.router.navigate([patient.id])
  }
}
