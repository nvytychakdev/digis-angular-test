import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients-overview-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients-overview-nav.component.html',
  styleUrls: ['./patients-overview-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsOverviewNavComponent {

}
