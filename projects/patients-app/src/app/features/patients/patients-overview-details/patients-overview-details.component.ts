import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PatientsService } from '../patients.service';

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
