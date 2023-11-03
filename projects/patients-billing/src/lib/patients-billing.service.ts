import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, switchMap, tap, timer } from 'rxjs';
import { PatientsBillingComponent } from './patients-billing.component';

@Injectable()
export class PatientsBillingService  {
  
  timeRegistry$ = new BehaviorSubject(0);

  timerStart$ = new BehaviorSubject(0);

  timer$ = this.timerStart$.pipe(
    switchMap(time => timer(0, 1000).pipe(map(timer => timer + (time || 0)))),
    tap(time => this.timeRegistry$.next(time)),
    map(time => this._humanizeTime(time)),
  );

  component?: ComponentRef<PatientsBillingComponent> 

  private _humanizeTime(time: number): string {
    const date = new Date(0);
    date.setSeconds(time);
    return date.toISOString().substring(11, 19);
  }

  startTracking(view: ViewContainerRef): void {
    view.clear(); 
    this.component = view.createComponent(PatientsBillingComponent);
  }

  stopTracking(view: ViewContainerRef): void {
    this.component?.destroy();
    view.detach();
  }
}
