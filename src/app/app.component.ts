import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicCoreService } from '@services/ionic-core/ionic-core.service';

import { AudioService } from '@services/ionic-native/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ionicCoreService:IonicCoreService,
    private audioService:AudioService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.loadAudio();
      this.splashScreen.hide();
    });
  }
  
  loadAudio(){
    this.audioService.loadAudio();
  }
}
