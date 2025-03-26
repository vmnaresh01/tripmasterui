import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
