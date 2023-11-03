import { Component, inject } from '@angular/core';
import { PatientsBillingService } from './patients-billing.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'lib-patients-billing',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
    <div>
      {{ time | async }}
    </div>
  `,
  styles: [
    `:host {
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      background: #ebebeb;
      border-radius: 4px;
      padding: 12px 24px;
      min-width: 100px;
    }`
  ]
})
export class PatientsBillingComponent {
  private readonly billing = inject(PatientsBillingService);

  get time () {
    return this.billing.timer$;
  }
}
