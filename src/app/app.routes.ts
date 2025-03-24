import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'features', loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent) },
  { path: 'destinations', loadComponent: () => import('./destinations/destinations.component').then(m => m.DestinationsComponent) },
  { path: 'pricing', loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent) },
  { path: 'login', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent) },
  { path: 'signup', redirectTo: 'login', pathMatch: 'full' }
];
