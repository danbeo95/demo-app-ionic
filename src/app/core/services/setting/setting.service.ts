import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const IS_SHOW_SPLASH_STORAGE = 'is-show-splash';
const IS_PLAY_AUIDO_SPLASH_STORAGE = 'is-play-audio-splash';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(
    private storageCtrl:Storage
  ) { 

  }

  settingShowPlash(val:boolean){
    this.storageCtrl.set(IS_SHOW_SPLASH_STORAGE,val);
  }
  settingShowAudioPlash(val:boolean){
    this.storageCtrl.set(IS_PLAY_AUIDO_SPLASH_STORAGE,val);
  }

  getShowSplash(){
    return this.storageCtrl.get(IS_SHOW_SPLASH_STORAGE);
  }
  getShowAudioSplash(){
    return this.storageCtrl.get(IS_PLAY_AUIDO_SPLASH_STORAGE);
  }
}
