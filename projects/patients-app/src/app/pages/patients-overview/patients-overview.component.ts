import { Component, inject } from '@angular/core';
import { PatientsOverviewNavComponent } from '../../features/patients/patients-overview-nav/patients-overview-nav.component';
import { PatientsOverviewDetailsComponent } from '../../features/patients/patients-overview-details/patients-overview-details.component';
import { PatientsTrackerService } from '../../features/patients/patients-tracker.service';
import { PatientsService } from '../../features/patients/patients.service';

/**
 * Patients overview page.
 * Represents detailed view of the patient.
 */
@Component({
  selector: 'app-patients-overview',
  standalone: true,
  imports: [PatientsOverviewNavComponent, PatientsOverviewDetailsComponent],
  templateUrl: './patients-overview.component.html',
  styleUrls: ['./patients-overview.component.scss']
})
export class PatientsOverviewComponent {
  private readonly patientsTracker = inject(PatientsTrackerService, { optional: true });
  private readonly patients = inject(PatientsService);
  patient = this.patients.selectedPatient;
  
  ngOnInit() {
    this.patientsTracker?.start(this.patient || undefined)
  }

  ngOnDestroy() {
    this.patientsTracker?.stop(this.patient || undefined)
  }
}
