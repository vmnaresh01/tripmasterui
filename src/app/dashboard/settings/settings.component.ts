import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

      <div class="space-y-6">
        <!-- Account Settings -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Account Settings</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email Notifications</label>
              <div class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-primary border-gray-300 rounded">
                <span class="ml-2 text-gray-600">Receive trip updates and recommendations</span>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Two-Factor Authentication</label>
              <div class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-primary border-gray-300 rounded">
                <span class="ml-2 text-gray-600">Enable additional security</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Preferences -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Preferences</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Language</label>
              <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Privacy -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Privacy</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Profile Visibility</label>
              <div class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-primary border-gray-300 rounded">
                <span class="ml-2 text-gray-600">Make profile public</span>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Share Trip History</label>
              <div class="flex items-center">
                <input type="checkbox" class="h-4 w-4 text-primary border-gray-300 rounded">
                <span class="ml-2 text-gray-600">Allow others to see my past trips</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SettingsComponent {}
