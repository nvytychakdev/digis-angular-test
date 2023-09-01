import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsService } from '../patients.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-overview-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './patients-overview-nav.component.html',
  styleUrls: ['./patients-overview-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsOverviewNavComponent {
  public readonly patients = inject(PatientsService);
  private readonly router = inject(Router);

  onBackClick(): void {
    this.router.navigate(['..']);
  }
}
