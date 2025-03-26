import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    this.auth.onAuthStateChanged(user => {
      this.user.next(user);
    });
  }

  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      if (result.user) {
        this.router.navigate(['/dashboard']);
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  isAuthenticated() {
    return this.user.value !== null;
  }
}
