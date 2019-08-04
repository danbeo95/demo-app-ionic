import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '@api/youtube/youtube.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  channelIds:Array<string> = ['UCs-R8HFk3PQHu3nWb1C1Maw','UCaayLD9i5x4MmIoVZxXSv_g','UCdSQ5P0S4lX4vdiC2SKL9Yw'];
  videos1$:Observable<Array<any>>;
  videos2$:Observable<Array<any>>;
  videos3$:Observable<Array<any>>;
  constructor(
    private youtubeApiService:YoutubeService,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    this.loadVideos();
    this.loadVideos();
  }

  loadVideos(){
    let channelId1 = this.channelIds[0];
    let channelId2 = this.channelIds[1];
    let channelId3 = this.channelIds[2];
    this.videos1$ = this.youtubeApiService.getListVideos(channelId1);
    this.videos2$ = this.youtubeApiService.getListVideos(channelId2);
    this.videos3$ = this.youtubeApiService.getListVideos(channelId3);
  }

  onClickVideo(video){
    let videoId = video.contentDetails.upload.videoId;
    this.navCtrl.navigateForward(['tabs','tab1','video-view',videoId]);
  }
}
