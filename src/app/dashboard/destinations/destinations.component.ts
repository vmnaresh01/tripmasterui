import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Destinations</h2>
        <div class="relative">
          <input type="text" placeholder="Search destinations..." 
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
          <i class="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img src="https://images.unsplash.com/photo-1610046226394-be65aabee26d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="Paris" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Paris, France</h3>
            <p class="text-gray-600 text-sm mb-4">The City of Light awaits with its iconic landmarks and charming streets.</p>
            <div class="flex items-center justify-between">
              <span class="text-primary font-medium">From $1,200</span>
              <button class="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DestinationsComponent {}
