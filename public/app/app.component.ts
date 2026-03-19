import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DeviceService } from './services/device.service';
import { PwaService } from './services/pwa.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private deviceService: DeviceService,
    private pwaService: PwaService
  ) {}

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Initialize device detection
      this.deviceService.detectDevice();
      
      // Initialize PWA service
      this.pwaService.initialize();
      
      // Set status bar style for native apps
      this.setStatusBarStyle();
      
      // Setup dark mode
      this.setupDarkMode();
    });
  }

  private setStatusBarStyle() {
    // For Capacitor/Cordova apps, you would set status bar here
    if (this.platform.is('cordova') || this.platform.is('capacitor')) {
      // Native status bar configuration
      console.log('Running as native app');
    }
  }

  private setupDarkMode() {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
    
    // Listen for theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    });
  }
}