import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async navigateToStartPage() {
    // Check if user is already logged in
    this.authService.user$.subscribe(user => {
      if (user) {
        // User is logged in, navigate to dashboard
        this.router.navigate(['/dashboard']);
      } else {
        // User is not logged in, navigate to auth page
        this.router.navigate(['/auth']);
      }
    });
  }

  getStarted() {
    this.navigateToStartPage();
    // console.log('Get Started clicked');
    // Implement get started logic
  }

  watchDemo() {
    console.log('Watch Demo clicked');
    // Implement watch demo logic
  }
}
