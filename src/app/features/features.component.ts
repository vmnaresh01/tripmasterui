import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="features-container">
      <h1>Our Features</h1>
      <div class="features-grid">
        <div class="feature-card">
          <i class="feature-icon">🎯</i>
          <h3>AI-Powered Itineraries</h3>
          <p>Get personalized travel plans based on your preferences and interests</p>
        </div>
        <div class="feature-card">
          <i class="feature-icon">💰</i>
          <h3>Budget Planning</h3>
          <p>Smart budget allocation and expense tracking for your trips</p>
        </div>
        <div class="feature-card">
          <i class="feature-icon">🗺️</i>
          <h3>Interactive Maps</h3>
          <p>Explore destinations with detailed maps and points of interest</p>
        </div>
        <div class="feature-card">
          <i class="feature-icon">📅</i>
          <h3>Schedule Optimization</h3>
          <p>Efficient time management for your travel activities</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .features-container {
      padding: 4rem 5%;
      text-align: center;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #333;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }
    
    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      display: block;
    }
    
    h3 {
      color: #4A90E2;
      margin-bottom: 1rem;
    }
    
    p {
      color: #666;
      line-height: 1.6;
    }
  `]
})
export class FeaturesComponent {}
