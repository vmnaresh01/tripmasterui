import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itineraries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Itineraries</h1>
      <p class="text-gray-600">Your travel plans will appear here.</p>
    </div>
  `,
  styles: []
})
export class ItinerariesComponent {}
