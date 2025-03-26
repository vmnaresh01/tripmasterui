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

  @HostListener('document:click')
  closeMenus() {
    this.isDropdownOpen = false;
    this.isMobileMenuOpen = false;
  }

  signOut(event: Event) {
    event.stopPropagation();
    this.authService.signOut();
    this.isDropdownOpen = false;
    this.isMobileMenuOpen = false;
  }

  watchDemo() {
    // Implement demo video functionality
    console.log('Opening demo video...');
  }

  getStarted() {
    // Implement get started functionality
    console.log('Starting trip planning...');
  }
}
