import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { PatientsService } from './features/patients/patients.service';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/patients-list/patients-list.component').then(m => m.PatientsListComponent)
  },
  {
    path: ':patientId',
    resolve: {
      patient: (route: ActivatedRouteSnapshot) => {
        const patients = inject(PatientsService);
        const foundPatient = patients.allPatients?.find(p => p.id === route.paramMap.get('patientId'));
        if(foundPatient) patients.setSelectedPatient(foundPatient);
      }
    },
    canDeactivate: [
      () => {
        inject(PatientsService).resetSelectedPatient();
        return true;
      }
    ],
    loadComponent: () => import('./pages/patients-overview/patients-overview.component').then(m => m.PatientsOverviewComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
