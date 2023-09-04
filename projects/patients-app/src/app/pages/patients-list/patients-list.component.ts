import { Component } from '@angular/core';
import { PatientsListTableComponent } from '../../features/patients/patients-list-table/patients-list-table.component';

/**
 * Patients list page.
 * Represents list of patients and allows to select patient for detailed observations.
 */
@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [PatientsListTableComponent],
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent {}
