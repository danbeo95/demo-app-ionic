import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss'],
})
export class ListVideosComponent implements OnInit {
  @Input('videos') videos$:Observable<Array<any>>;
  @Output() videoClick:EventEmitter<any> = new EventEmitter();
  @Input() title:string;
  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {}


  goToViewPage(videoId){
    this.navCtrl.navigateBack(['tabs','tab1','video-view',videoId])
  }

  onClickVideo(video){
    this.videoClick.emit(video);
  }
}
