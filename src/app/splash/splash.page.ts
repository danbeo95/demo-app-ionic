import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AudioService } from '@services/ionic-native/audio.service';
import { SettingService } from '@services/setting/setting.service';

NavController
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  isShowSplash: boolean;

  constructor(
    private navCtrl: NavController,
    private settingService: SettingService,
    private audioService: AudioService
  ) { }

  ngOnInit() {
    this.getShowSplash();
    this.goToTabsPage();
  }
  goToTabsPage() {
    setTimeout(() => {
      this.stopAudio();
      this.navCtrl.navigateRoot(['tabs']);
    }, 5000);
  }

  getShowSplash() {
    this.settingService.getShowSplash().then(show => {
      if (show === null) { this.isShowSplash = true }
      else {
      this.isShowSplash = show;
      }
    })
  }
  stopAudio() {
    this.audioService.stopAudio().then(() => {
      this.audioService.unLoadAudio();
    })
  }
}
