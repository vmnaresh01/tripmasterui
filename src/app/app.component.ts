import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tripmasterui';

  watchDemo() {
    // Implement demo video functionality
    console.log('Opening demo video...');
  }

  getStarted() {
    // Implement get started functionality
    console.log('Starting trip planning...');
  }
}
