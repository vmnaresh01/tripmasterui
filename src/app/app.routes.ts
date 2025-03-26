import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
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
  { 
    path: 'pricing',
    loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent),
    canActivate: [authGuard]
  },
  { path: 'auth', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent) },
  { path: '**', redirectTo: '' }
];
