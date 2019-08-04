import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

const AUDIO_PATH = 'assets/mp3/sound.mp3';
const AUDIO_ID = 'soundId';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(
    private audioCtrl:NativeAudio
  ) { 

  }
  loadAudio(){
    this.audioCtrl.preloadComplex(AUDIO_ID,AUDIO_PATH,1,1,0).then(
      (success)=>this.playAudio()
    )
  }
  unLoadAudio(){
    return this.audioCtrl.unload(AUDIO_ID);
  }
  playAudio(){
    return this.audioCtrl.play(AUDIO_ID);
  }

  stopAudio(){
    return this.audioCtrl.stop(AUDIO_ID);
  }
}
