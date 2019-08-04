import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '@api/youtube/youtube.service';
import { NavController, IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.page.html',
  styleUrls: ['./video-view.page.scss'],
})
export class VideoViewPage implements OnInit {
  @ViewChild(IonContent,{static:false}) content: IonContent;
  video: any;
  videosOther$: Observable<Array<any>>;
  videoId:string;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private youtubeService: YoutubeService
  ) { }

  ngOnInit() {
    this.onLoadParams();
    this.loadOtherVideos();
  }

  onLoadParams() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loadDetailVideo(id);
  }

  loadDetailVideo(videoId: string) {
    this.youtubeService.getDetailVideo(videoId).subscribe(res => {
      this.video = res[0];
      this.videoId = this.video.id;
    })
  }
  loadOtherVideos() {
    this.videosOther$ = this.youtubeService.getListVideos('UCs-R8HFk3PQHu3nWb1C1Maw');
  }
  goBack() {
    this.navCtrl.navigateBack(['tabs','tab1','music'])
  }
  onClickOtherVideo(video) {
    this.content.scrollToTop(1000);
    this.video = video;
    this.videoId = video.contentDetails.upload.videoId;
  }
}

