import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';

/**
 * Patients overview navigation.
 * Display header navigation for patient's overview page.
 * Provides selected patient name and back button to return to the previous page.
 */
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

  /**
   * Back button click.
   * Handler fired any time back button clicked
   * to navigate user back to the list of patients.
   */
  onBackClick(): void {
    this.router.navigate(['..']);
  }
}
