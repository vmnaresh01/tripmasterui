import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tripmasterui';
  user$;
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
    this.isMobileMenuOpen = false;
  }

  async signOut() {
    await this.authService.signOut();
    this.isMobileMenuOpen = false;
    this.isDropdownOpen = false;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.isDropdownOpen = false;
    this.isMobileMenuOpen = false;
  }
}
