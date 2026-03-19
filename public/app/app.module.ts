import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { DeviceService } from './services/device.service';
import { PwaService } from './services/pwa.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios', // Use iOS style for all platforms for consistency
      backButtonText: '',
      animated: true
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    DeviceService,
    PwaService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}