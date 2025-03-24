import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pricing-container">
      <h1>Choose Your Plan</h1>
      <p class="subtitle">Select the perfect plan for your travel needs</p>
      
      <div class="pricing-grid">
        <div class="pricing-card basic">
          <h2>Basic</h2>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">9</span>
            <span class="period">/month</span>
          </div>
          <ul class="features">
            <li> Basic AI trip suggestions</li>
            <li> Standard itinerary planning</li>
            <li> Basic budget tracking</li>
            <li> Email support</li>
          </ul>
          <button class="select-plan">Get Started</button>
        </div>

        <div class="pricing-card pro">
          <div class="popular-tag">Most Popular</div>
          <h2>Pro</h2>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">19</span>
            <span class="period">/month</span>
          </div>
          <ul class="features">
            <li> Advanced AI recommendations</li>
            <li> Custom itinerary planning</li>
            <li> Real-time budget tracking</li>
            <li> Priority support</li>
            <li> Offline access</li>
          </ul>
          <button class="select-plan">Get Started</button>
        </div>

        <div class="pricing-card premium">
          <h2>Premium</h2>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">39</span>
            <span class="period">/month</span>
          </div>
          <ul class="features">
            <li> Premium AI features</li>
            <li> VIP travel planning</li>
            <li> Advanced analytics</li>
            <li> 24/7 priority support</li>
            <li> Exclusive deals</li>
            <li> Team collaboration</li>
          </ul>
          <button class="select-plan">Get Started</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pricing-container {
      padding: 4rem 5%;
      text-align: center;
      background-color: #f5f5f5;
    }

    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .subtitle {
      color: #666;
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .pricing-card {
      background: white;
      border-radius: 10px;
      padding: 2rem;
      position: relative;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .pricing-card:hover {
      transform: translateY(-5px);
    }

    .pro {
      border: 2px solid #4A90E2;
    }

    .popular-tag {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: #4A90E2;
      color: white;
      padding: 0.25rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
    }

    h2 {
      color: #4A90E2;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .price {
      margin: 1.5rem 0;
    }

    .currency {
      font-size: 1.5rem;
      vertical-align: top;
      color: #333;
    }

    .amount {
      font-size: 3rem;
      font-weight: bold;
      color: #333;
    }

    .period {
      color: #666;
    }

    .features {
      list-style: none;
      padding: 0;
      margin: 2rem 0;
      text-align: left;
    }

    .features li {
      margin-bottom: 0.75rem;
      color: #666;
    }

    .select-plan {
      background-color: #4A90E2;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      width: 100%;
    }

    .select-plan:hover {
      background-color: #357abd;
    }

    @media (max-width: 768px) {
      .pricing-grid {
        grid-template-columns: 1fr;
        max-width: 400px;
      }
    }
  `]
})
export class PricingComponent {}
