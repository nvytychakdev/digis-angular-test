import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients-overview-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients-overview-details.component.html',
  styleUrls: ['./patients-overview-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsOverviewDetailsComponent {

}
