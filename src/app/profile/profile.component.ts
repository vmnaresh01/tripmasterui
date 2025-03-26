import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Profile</h1>
      <div class="bg-white rounded-lg shadow p-6 max-w-2xl">
        <ng-container *ngIf="user$ | async as user">
          <div class="flex items-center space-x-4 mb-6">
            <img [src]="user.photoURL" alt="Profile" class="w-20 h-20 rounded-full">
            <div>
              <h2 class="text-2xl font-semibold text-gray-800">{{ user.displayName }}</h2>
              <p class="text-gray-600">{{ user.email }}</p>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileComponent {
  user$;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }
}
