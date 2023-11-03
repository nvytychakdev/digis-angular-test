import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientsTrackerService } from './features/patients/patients-tracker.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('timer', { read: ViewContainerRef, static: true }) timer!: ViewContainerRef;

  private readonly patientsTracker = inject(PatientsTrackerService, { optional: true })

  ngOnInit(): void {
    this.patientsTracker?.setView(this.timer);
  }
}
