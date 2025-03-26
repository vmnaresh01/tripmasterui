import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Settings</h1>
      <div class="bg-white rounded-lg shadow p-6 max-w-2xl">
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Preferences</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Email Notifications</span>
                <button class="bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Configure</button>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Travel Preferences</span>
                <button class="bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Edit</button>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Account</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Change Password</span>
                <button class="bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Update</button>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Delete Account</span>
                <button class="bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm font-medium">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SettingsComponent {}
