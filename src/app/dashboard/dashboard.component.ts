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
      <!-- Mobile Menu Toggle -->
      <button 
        (click)="toggleSidebar()"
        class="md:hidden fixed top-20 left-4 z-50 bg-white p-2 rounded-lg shadow-lg text-gray-700 hover:text-primary">
        <i class="ri-menu-line text-xl"></i>
      </button>

      <!-- Left Sidebar -->
      <div [class]="'fixed md:static md:block transform transition-transform duration-300 ease-in-out z-40 w-64 bg-white shadow-lg h-[calc(100vh-4rem)]' + 
          (isSidebarOpen ? ' translate-x-0' : ' -translate-x-full md:translate-x-0')">
        <div class="p-4">
          <h1 class="text-xl font-bold text-gray-800">AI Trip Planner</h1>
        </div>
        <nav class="mt-4">
          <a routerLink="/dashboard" routerLinkActive="bg-gray-100 text-primary" [routerLinkActiveOptions]="{exact: true}"
            (click)="onMenuClick()"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-dashboard-line mr-3 text-xl"></i>
            <span>Overview</span>
          </a>
          <a routerLink="/dashboard/trips" routerLinkActive="bg-gray-100 text-primary"
            (click)="onMenuClick()"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-time-line mr-3 text-xl"></i>
            <span>My Trips</span>
          </a>
          <a routerLink="/dashboard/destinations" routerLinkActive="bg-gray-100 text-primary"
            (click)="onMenuClick()"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-map-pin-line mr-3 text-xl"></i>
            <span>Destinations</span>
          </a>
          <a routerLink="/dashboard/itineraries" routerLinkActive="bg-gray-100 text-primary"
            (click)="onMenuClick()"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-calendar-line mr-3 text-xl"></i>
            <span>Itineraries</span>
          </a>
          <a routerLink="/dashboard/profile" routerLinkActive="bg-gray-100 text-primary"
            (click)="onMenuClick()"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-user-line mr-3 text-xl"></i>
            <span>Profile</span>
          </a>
          <a routerLink="/dashboard/settings" routerLinkActive="bg-gray-100 text-primary"
            (click)="onMenuClick()"
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
            <i class="ri-settings-line mr-3 text-xl"></i>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <!-- Overlay for mobile -->
      <div 
        *ngIf="isSidebarOpen" 
        (click)="toggleSidebar()"
        class="fixed md:hidden inset-0 bg-black bg-opacity-50 z-30">
      </div>

      <!-- Main Content Area with Router Outlet -->
      <div class="flex-1 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class DashboardComponent {
  isSidebarOpen = false;

  constructor(private authService: AuthService) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onMenuClick() {
    // Only close the sidebar on mobile
    if (window.innerWidth < 768) {
      this.isSidebarOpen = false;
    }
  }
}
