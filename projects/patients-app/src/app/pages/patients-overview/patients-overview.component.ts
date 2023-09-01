import { Component } from '@angular/core';
import { PatientsOverviewNavComponent } from '../../features/patients/patients-overview-nav/patients-overview-nav.component';
import { PatientsOverviewDetailsComponent } from '../../features/patients/patients-overview-details/patients-overview-details.component';

@Component({
  selector: 'app-patients-overview',
  standalone: true,
  imports: [PatientsOverviewNavComponent, PatientsOverviewDetailsComponent],
  templateUrl: './patients-overview.component.html',
  styleUrls: ['./patients-overview.component.scss']
})
export class PatientsOverviewComponent {

}
