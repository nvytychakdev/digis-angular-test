import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { PatientsListTableComponent } from '../../features/patients/patients-list-table/patients-list-table.component';


@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [PatientsListTableComponent],
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent {

}
