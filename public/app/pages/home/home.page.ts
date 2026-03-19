import { Component, OnInit } from '@angular/core';
import { DeviceService, DeviceType } from '../../services/device.service';
import { PwaService } from '../../services/pwa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  deviceType: DeviceType = 'desktop';
  deviceName = '';
  browserName = '';
  isStandalone = false;
  isSkipped = false;
  canInstall = false;
  installInstructions: string[] = [];
  
  // UI state
  showInstallCard = true;
  showAppFeatures = false;
  showInstalledMessage = false;

  constructor(
    private deviceService: DeviceService,
    private pwaService: PwaService
  ) {}

  ngOnInit() {
    this.initializePage();
  }

  private initializePage(): void {
    // Get device info
    this.deviceType = this.deviceService.getDeviceType();
    this.deviceName = this.deviceService.getDeviceName();
    this.browserName = this.deviceService.getBrowserName();
    this.isStandalone = this.deviceService.getIsStandalone();
    this.isSkipped = this.deviceService.isInstallationSkipped();
    this.canInstall = this.pwaService.canInstall();
    this.installInstructions = this.deviceService.getInstallInstructions();

    // Update UI based on state
    this.updateUIState();
  }

  private updateUIState(): void {
    if (this.isStandalone) {
      // App is installed
      this.showInstallCard = false;
      this.showAppFeatures = true;
      this.showInstalledMessage = true;
    } else if (this.isSkipped) {
      // User skipped installation
      this.showInstallCard = false;
      this.showAppFeatures = true;
      this.showInstalledMessage = false;
    } else {
      // Show installation flow
      this.showInstallCard = true;
      this.showAppFeatures = false;
      this.showInstalledMessage = false;
    }
  }

  async onInstallClick(): Promise<void> {
    const installed = await this.pwaService.triggerInstall();
    if (installed) {
      this.deviceService.markAsInstalled();
      this.isStandalone = true;
      this.updateUIState();
    }
  }

  onSkipClick(): void {
    this.deviceService.skipInstallation();
    this.isSkipped = true;
    this.updateUIState();
  }

  onThemeToggle(): void {
    this.pwaService.toggleDarkMode();
  }

  getStepIcon(step: number): string {
    switch(step) {
      case 1: return '1️⃣';
      case 2: return '2️⃣';
      case 3: return '3️⃣';
      case 4: return '4️⃣';
      default: return '📱';
    }
  }

  getDeviceIcon(): string {
    switch(this.deviceType) {
      case 'ios': return '📱';
      case 'android': return '🤖';
      default: return '💻';
    }
  }

  getInstallButtonText(): string {
    if (this.deviceType === 'ios') {
      return 'Add to Home Screen';
    } else if (this.deviceType === 'android') {
      return 'Install App';
    } else {
      return 'Install ToyBits';
    }
  }

  showDemo(feature: string): void {
    const messages: Record<string, string> = {
      dashboard: '📊 Dashboard: View your business metrics and analytics',
      tasks: '✅ Tasks: Manage your to-do list and projects',
      messages: '💬 Messages: Communicate with your team',
      settings: '⚙️ Settings: Configure your app preferences'
    };
    
    alert(messages[feature] || 'Feature demo');
  }

  takeAppTour(): void {
    alert('Welcome to ToyBits! This is a native-like PWA experience with:\n\n• Native app UI components\n• Offline functionality\n• Push notifications\n• Dark mode support\n• Smooth animations');
  }
}