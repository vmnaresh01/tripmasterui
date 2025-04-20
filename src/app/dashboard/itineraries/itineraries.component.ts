import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itineraries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Itineraries</h2>
        <button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          <i class="ri-add-line mr-2"></i>Create New
        </button>
      </div>

      <!-- Itineraries List -->
      <div class="space-y-4">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Paris Explorer</h3>
              <p class="text-gray-600">June 15 - June 22, 2024</p>
            </div>
            <div class="flex items-center space-x-2">
              <button class="text-primary hover:text-primary/80">
                <i class="ri-edit-line text-xl"></i>
              </button>
              <button class="text-red-500 hover:text-red-600">
                <i class="ri-delete-bin-line text-xl"></i>
              </button>
            </div>
          </div>
          <div class="border-t pt-4">
            <div class="flex items-center text-sm text-gray-600">
              <i class="ri-map-pin-line mr-2"></i>
              <span>8 locations</span>
              <span class="mx-2">•</span>
              <i class="ri-time-line mr-2"></i>
              <span>7 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ItinerariesComponent {}
