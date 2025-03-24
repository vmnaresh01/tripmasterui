import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h2>{{ isLogin ? 'Login' : 'Sign Up' }}</h2>
          <p>{{ isLogin ? 'Welcome back!' : 'Create your account' }}</p>
        </div>

        <form [formGroup]="authForm" (ngSubmit)="onSubmit()">
          <div class="form-group" *ngIf="!isLogin">
            <label for="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              formControlName="name"
              placeholder="Enter your full name"
            >
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email"
              placeholder="Enter your email"
            >
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              formControlName="password"
              placeholder="Enter your password"
            >
          </div>

          <button type="submit" class="submit-btn" [disabled]="!authForm.valid">
            {{ isLogin ? 'Login' : 'Sign Up' }}
          </button>
        </form>

        <div class="auth-footer">
          <p>
            {{ isLogin ? 'Don\'t have an account?' : 'Already have an account?' }}
            <a href="javascript:void(0)" (click)="toggleAuthMode()">
              {{ isLogin ? 'Sign Up' : 'Login' }}
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #1a1a1a 0%, #2C2C2C 100%);
      padding: 2rem;
    }

    .auth-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .auth-header {
      text-align: center;
      margin-bottom: 2rem;

      h2 {
        color: #333;
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #666;
      }
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
      }

      input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: #4A90E2;
        }
      }
    }

    .submit-btn {
      width: 100%;
      padding: 0.75rem;
      background-color: #4A90E2;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #357abd;
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }

    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;

      p {
        color: #666;
      }

      a {
        color: #4A90E2;
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `]
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLogin = true;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    // Form is already initialized in constructor
  }

  private initForm() {
    if (this.isLogin) {
      this.authForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    } else {
      this.authForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }

  toggleAuthMode() {
    this.isLogin = !this.isLogin;
    this.initForm();
  }

  onSubmit() {
    if (this.authForm.valid) {
      console.log('Form submitted:', this.authForm.value);
      // Implement authentication logic here
    }
  }
}
