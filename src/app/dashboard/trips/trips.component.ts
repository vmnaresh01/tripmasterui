import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">My Trips</h2>
        <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          <i class="ri-add-line mr-2"></i>New Trip
        </button>
      </div>

      <!-- Placeholder for trips list -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">Paris Adventure</h3>
            <span class="text-sm text-primary">Upcoming</span>
          </div>
          <p class="text-gray-600 mb-4">7 days in the City of Light</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">Jun 15 - Jun 22</span>
            <button class="text-primary hover:text-primary/80">
              <i class="ri-more-2-fill text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TripsComponent {}
