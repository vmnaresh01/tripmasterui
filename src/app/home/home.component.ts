import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <main class="pt-16">
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

     <!-- Features Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 class="serif-font text-3xl md:text-4xl font-bold text-dark mb-4 mt-2">Smart features for effortless travel planning</h2>
          <p class="text-lg text-gray-600">Tripmaster combines AI intelligence with travel expertise to make your journey planning simple and enjoyable.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="ri-compass-3-line text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">AI Itinerary Builder</h3>
            <p class="text-gray-600">Our smart algorithm creates personalized travel plans based on your preferences, budget, and available time.</p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="ri-map-pin-line text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Local Insights</h3>
            <p class="text-gray-600">Discover hidden gems and authentic experiences with recommendations from locals and seasoned travelers.</p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="ri-notification-3-line text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Real-time Updates</h3>
            <p class="text-gray-600">Stay informed with live weather forecasts, flight status, and local event notifications during your trip.</p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="ri-team-line text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Group Planning</h3>
            <p class="text-gray-600">Collaborate with friends and family to create a trip everyone will love with shared editing and voting.</p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="ri-wallet-3-line text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Budget Tracking</h3>
            <p class="text-gray-600">Keep your expenses in check with integrated budget tools that help you plan and track spending.</p>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="ri-download-cloud-line text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Offline Access</h3>
            <p class="text-gray-600">Access your travel plans anywhere, even without internet connection, with our mobile app.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 class="serif-font text-3xl md:text-4xl font-bold text-dark mb-4 mt-2">How Tripmaster works</h2>
          <p class="text-lg text-gray-600">Creating your perfect travel itinerary is easy with our intuitive platform.</p>
        </div>
        
        <div class="relative">
          <!-- Connection Line -->
          <div class="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary z-0"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="relative z-10">
              <div class="bg-white w-12 h-12 rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold mx-auto mb-6 shadow-md">1</div>
              <div class="bg-white rounded-xl p-6 shadow-card">
                <h3 class="text-xl font-bold text-dark text-center mb-3">Share your preferences</h3>
                <p class="text-gray-600 text-center">Tell us about your travel style, interests, budget, and must-see attractions.</p>
              </div>
            </div>
            
            <div class="relative z-10">
              <div class="bg-white w-12 h-12 rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold mx-auto mb-6 shadow-md">2</div>
              <div class="bg-white rounded-xl p-6 shadow-card">
                <h3 class="text-xl font-bold text-dark text-center mb-3">Get personalized itinerary</h3>
                <p class="text-gray-600 text-center">Our AI generates a custom travel plan optimized for your needs and interests.</p>
              </div>
            </div>
            
            <div class="relative z-10">
              <div class="bg-white w-12 h-12 rounded-full flex items-center justify-center border-2 border-primary text-primary font-bold mx-auto mb-6 shadow-md">3</div>
              <div class="bg-white rounded-xl p-6 shadow-card">
                <h3 class="text-xl font-bold text-dark text-center mb-3">Enjoy your journey</h3>
                <p class="text-gray-600 text-center">Access your plans on the go and receive real-time updates and recommendations.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <a href="/signup" class="bg-primary text-white px-8 py-3 rounded-lg inline-block font-medium hover:bg-primary/90 transition-colors">Start Planning Free</a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 class="serif-font text-3xl md:text-4xl font-bold text-dark mb-4 mt-2">What our travelers say</h2>
          <p class="text-lg text-gray-600">Join thousands of happy travelers who use Tripmaster to create unforgettable experiences.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-card border border-gray-100">
            <div class="flex items-center mb-4">
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
            </div>
            <p class="text-gray-600 mb-6">"Tripmaster completely transformed our family vacation. The AI suggested places we would never have found on our own, and every recommendation was perfect for our interests!"</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Emily Johnson" class="h-10 w-10 rounded-full mr-3">
              <div>
                <p class="font-semibold text-dark">Emily Johnson</p>
                <p class="text-sm text-gray-500">Family Traveler</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-card border border-gray-100">
            <div class="flex items-center mb-4">
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
            </div>
            <p class="text-gray-600 mb-6">"As a business traveler, I need efficient planning that maximizes my limited free time. Tripmaster helps me blend work and exploration perfectly. The time-saving is incredible!"</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Marcus Chen" class="h-10 w-10 rounded-full mr-3">
              <div>
                <p class="font-semibold text-dark">Marcus Chen</p>
                <p class="text-sm text-gray-500">Business Traveler</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-card border border-gray-100">
            <div class="flex items-center mb-4">
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
              <i class="ri-star-fill text-yellow-400"></i>
            </div>
            <p class="text-gray-600 mb-6">"Planning our honeymoon was stress-free with Tripmaster. The collaborative tools made it easy for us to decide on activities together, and the budget tracking kept us on target."</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Sofia & David" class="h-10 w-10 rounded-full mr-3">
              <div>
                <p class="font-semibold text-dark">Sofia & David</p>
                <p class="text-sm text-gray-500">Couple Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Destinations Section -->
    <section class="py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider">Explore</span>
          <h2 class="serif-font text-3xl md:text-4xl font-bold text-dark mb-4 mt-2">Popular destinations</h2>
          <p class="text-lg text-gray-600">Explore trending locations and get inspired for your next adventure.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2073" alt="Paris" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-5 bg-white">
              <h3 class="font-bold text-lg mb-1">Paris</h3>
              <p class="text-gray-500 text-sm mb-3">France</p>
              <div class="flex items-center text-sm">
                <i class="ri-map-pin-line text-primary mr-1"></i>
                <span>326 Itineraries</span>
              </div>
            </div>
          </div>
          
          <div class="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1974" alt="Tokyo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-5 bg-white">
              <h3 class="font-bold text-lg mb-1">Tokyo</h3>
              <p class="text-gray-500 text-sm mb-3">Japan</p>
              <div class="flex items-center text-sm">
                <i class="ri-map-pin-line text-primary mr-1"></i>
                <span>284 Itineraries</span>
              </div>
            </div>
          </div>
          
          <div class="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1996" alt="Rome" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-5 bg-white">
              <h3 class="font-bold text-lg mb-1">Rome</h3>
              <p class="text-gray-500 text-sm mb-3">Italy</p>
              <div class="flex items-center text-sm">
                <i class="ri-map-pin-line text-primary mr-1"></i>
                <span>247 Itineraries</span>
              </div>
            </div>
          </div>
          
          <div class="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2070" alt="New York" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-5 bg-white">
              <h3 class="font-bold text-lg mb-1">New York</h3>
              <p class="text-gray-500 text-sm mb-3">USA</p>
              <div class="flex items-center text-sm">
                <i class="ri-map-pin-line text-primary mr-1"></i>
                <span>216 Itineraries</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-10 text-center">
          <a href="/destinations" class="text-primary font-medium hover:underline inline-flex items-center">
            Explore all destinations
            <i class="ri-arrow-right-line ml-1"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- App Download Section -->
    <section class="py-20 bg-primary/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 order-2 lg:order-1">
            <span class="text-primary font-semibold text-sm uppercase tracking-wider">Mobile App</span>
            <h2 class="serif-font text-3xl md:text-4xl font-bold text-dark mb-6 mt-2">Take Tripmaster with you everywhere</h2>
            <p class="text-lg text-gray-600 mb-8">Download our mobile app to access your travel plans offline, get real-time updates, and discover new places on the go.</p>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#" class="flex items-center justify-center bg-dark text-white px-6 py-3 rounded-lg hover:bg-dark/90 transition-colors">
                <i class="ri-apple-fill text-2xl mr-2"></i>
                <div>
                  <div class="text-xs">Download on the</div>
                  <div class="font-medium">App Store</div>
                </div>
              </a>
              <a href="#" class="flex items-center justify-center bg-dark text-white px-6 py-3 rounded-lg hover:bg-dark/90 transition-colors">
                <i class="ri-google-play-fill text-2xl mr-2"></i>
                <div>
                  <div class="text-xs">Get it on</div>
                  <div class="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/2 order-1 lg:order-2">
            <div class="relative max-w-xs mx-auto">
              <div class="absolute inset-0 bg-secondary rounded-3xl opacity-10 transform -rotate-6"></div>
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1170" alt="Mobile App" class="relative rounded-3xl shadow-lg w-full z-10">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-secondary/90">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="serif-font text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your next adventure?</h2>
        <p class="text-xl text-white/90 mb-8">Join thousands of happy travelers planning their trips with Tripmaster.</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/signup" class="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Create Free Account</a>
          <a href="/contact" class="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">Contact Sales</a>
        </div>
      </div>
    </section>
  </main>

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
