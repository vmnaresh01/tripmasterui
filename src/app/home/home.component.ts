import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
        <section class="bg-light py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 class="serif-font text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">Plan your perfect trip with AI assistance</h1>
            <p class="text-lg text-gray-600 mb-8">Tripmaster uses intelligent algorithms to create personalized travel itineraries based on your preferences, budget, and schedule. Discover new places and make the most of your journey.</p>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="/signup" class="bg-primary text-white px-8 py-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors">Get Started</a>
              <a href="/demo" class="border border-gray-300 text-dark px-8 py-3 rounded-lg text-center font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                <i class="ri-play-circle-line mr-2"></i> Watch Demo
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="relative">
              <div class="absolute inset-0 bg-primary rounded-2xl opacity-10 transform rotate-3"></div>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070" alt="Travel Planning Dashboard" class="relative rounded-2xl shadow-lg w-full z-10 object-cover h-80">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="py-12 border-y border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 mb-8">Trusted by travelers from leading companies</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/adobe.svg" alt="Adobe" class="h-8 w-32 opacity-60">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazon.svg" alt="Amazon" class="h-8 w-32 opacity-60">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/google.svg" alt="Google" class="h-8 w-32 opacity-60">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/microsoft.svg" alt="Microsoft" class="h-8 w-32 opacity-60">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/salesforce.svg" alt="Salesforce" class="h-8 w-32 opacity-60">
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent {
  getStarted() {
    console.log('Get Started clicked');
    // Implement get started logic
  }

  watchDemo() {
    console.log('Watch Demo clicked');
    // Implement watch demo logic
  }
}
