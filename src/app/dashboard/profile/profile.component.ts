import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Profile</h2>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-start space-x-6">
          <img [src]="(user$ | async)?.photoURL" alt="Profile" class="w-24 h-24 rounded-full">
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800">{{(user$ | async)?.displayName}}</h3>
            <p class="text-gray-600">{{(user$ | async)?.email}}</p>
            
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium text-gray-700 mb-2">Travel Stats</h4>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Trips Completed</span>
                    <span class="font-medium">12</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Countries Visited</span>
                    <span class="font-medium">8</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Total Travel Days</span>
                    <span class="font-medium">45</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-gray-700 mb-2">Preferences</h4>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Language</span>
                    <span class="font-medium">English</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Currency</span>
                    <span class="font-medium">USD</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Time Zone</span>
                    <span class="font-medium">UTC+0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent {
  user$;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }
}
