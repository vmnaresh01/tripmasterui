import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { redirectGuard } from './guards/redirect.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    // canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component').then(c => c.AuthComponent),
    canActivate: [redirectGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/overview/overview.component').then(c => c.OverviewComponent)
      },
      {
        path: 'trips',
        loadComponent: () => import('./dashboard/trips/trips.component').then(c => c.TripsComponent)
      },
      {
        path: 'destinations',
        loadComponent: () => import('./dashboard/destinations/destinations.component').then(c => c.DestinationsComponent)
      },
      {
        path: 'itineraries',
        loadComponent: () => import('./dashboard/itineraries/itineraries.component').then(c => c.ItinerariesComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./dashboard/profile/profile.component').then(c => c.ProfileComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./dashboard/settings/settings.component').then(c => c.SettingsComponent)
      }
    ]
  },
  {
    path: 'features',
    loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
    canActivate: [authGuard]
  },
  {
    path: 'destinations',
    loadComponent: () => import('./destinations/destinations.component').then(m => m.DestinationsComponent),
    canActivate: [authGuard]
  },
  {
    path: 'itineraries',
    loadComponent: () => import('./itineraries/itineraries.component').then(m => m.ItinerariesComponent),
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [authGuard]
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '' }
];
