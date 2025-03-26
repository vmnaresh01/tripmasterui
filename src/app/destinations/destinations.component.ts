import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="destinations-container">
      <h1>Popular Destinations</h1>
      <div class="destinations-grid">
        <div class="destination-card">
          <img src="https://images.unsplash.com/photo-1610046226394-be65aabee26d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="Paris" class="destination-image">
          <div class="destination-content">
            <h3>Paris, France</h3>
            <p>The City of Light awaits with its iconic landmarks and romantic atmosphere</p>
            <button class="explore-btn">Explore</button>
          </div>
        </div>
        <div class="destination-card">
          <img src="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tokyo" class="destination-image">
          <div class="destination-content">
            <h3>Tokyo, Japan</h3>
            <p>Experience the perfect blend of tradition and modern technology</p>
            <button class="explore-btn">Explore</button>
          </div>
        </div>
        <div class="destination-card">
          <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D" alt="New York" class="destination-image">
          <div class="destination-content">
            <h3>New York, USA</h3>
            <p>Discover the city that never sleeps and its vibrant culture</p>
            <button class="explore-btn">Explore</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .destinations-container {
      padding: 4rem 5%;
      background-color: #f5f5f5;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #333;
    }

    .destinations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .destination-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .destination-card:hover {
      transform: translateY(-5px);
    }

    .destination-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .destination-content {
      padding: 1.5rem;
    }

    h3 {
      color: #4A90E2;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .explore-btn {
      background-color: #4A90E2;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .explore-btn:hover {
      background-color: #357abd;
    }
  `]
})
export class DestinationsComponent {}
