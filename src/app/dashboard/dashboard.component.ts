import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex h-screen bg-gray-100 pt-16">
      <!-- Left Sidebar -->
      <div class="w-64 bg-white shadow-lg">
        <div class="p-4">
          <h1 class="text-xl font-bold text-gray-800">AI Trip Planner</h1>
        </div>
        <nav class="mt-4">
          <a routerLink="/dashboard" routerLinkActive="bg-gray-100 text-primary" [routerLinkActiveOptions]="{exact: true}"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-time-line mr-3 text-xl"></i>
            <span>My Trips</span>
          </a>
          <a routerLink="/destinations" routerLinkActive="bg-gray-100 text-primary"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-map-pin-line mr-3 text-xl"></i>
            <span>Destinations</span>
          </a>
          <a routerLink="/itineraries" routerLinkActive="bg-gray-100 text-primary"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-calendar-line mr-3 text-xl"></i>
            <span>Itineraries</span>
          </a>
          <a routerLink="/profile" routerLinkActive="bg-gray-100 text-primary"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-user-line mr-3 text-xl"></i>
            <span>Profile</span>
          </a>
          <a routerLink="/settings" routerLinkActive="bg-gray-100 text-primary"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-settings-line mr-3 text-xl"></i>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <!-- Main Content Area -->
      <div class="flex-1 p-8">
        <ng-container *ngIf="user$ | async as user">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back, {{ user.displayName }}!</h1>
          <p class="text-gray-600 mb-8">Let's plan your next adventure together.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Planned Trips Card -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Planned Trips</h2>
                <i class="ri-flight-takeoff-line text-2xl text-primary"></i>
              </div>
              <p class="text-3xl font-bold text-gray-900">3</p>
              <p class="text-sm text-gray-600">Active trips</p>
            </div>

            <!-- Destinations Card -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Destinations</h2>
                <i class="ri-map-pin-line text-2xl text-primary"></i>
              </div>
              <p class="text-3xl font-bold text-gray-900">12</p>
              <p class="text-sm text-gray-600">Places to explore</p>
            </div>

            <!-- Travel Days Card -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Travel Days</h2>
                <i class="ri-calendar-line text-2xl text-primary"></i>
              </div>
              <p class="text-3xl font-bold text-gray-900">45</p>
              <p class="text-sm text-gray-600">Days of adventure</p>
            </div>

            <!-- Budget Saved Card -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Budget Saved</h2>
                <i class="ri-money-dollar-circle-line text-2xl text-primary"></i>
              </div>
              <p class="text-3xl font-bold text-gray-900">$2.5k</p>
              <p class="text-sm text-gray-600">Total savings</p>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent {
  user$;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
    // console.log(this.user$)
  }
}
