import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PatientsService } from '../patients.service';

/**
 * Patient's overview details.
 * This component provides detailed look of the patient data.
 * Used to display modules that patient submitted and additional data of the profile.
 */
@Component({
  selector: 'app-patients-overview-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './patients-overview-details.component.html',
  styleUrls: ['./patients-overview-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsOverviewDetailsComponent {
  public readonly patients = inject(PatientsService);
}
