import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <ng-container *ngIf="user$ | async as user">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Welcome {{user.displayName}}!</h2>
        
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
  `
})
export class OverviewComponent {
  user$;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }
}
