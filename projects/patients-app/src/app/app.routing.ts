import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/patients-list/patients-list.component').then(m => m.PatientsListComponent)
  },
  {
    path: ':patientId',
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./pages/patients-overview/patients-overview.component').then(m => m.PatientsOverviewComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
