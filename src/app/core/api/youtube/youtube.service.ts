import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  defaultParams: any;
  url: string = 'https://www.googleapis.com/youtube/v3/';
  constructor(
    private http: HttpClient
  ) {
    this.defaultParams = {
      key: environment.youtubeApiKey,
      maxResults: 5,
      part: 'contentDetails,id,snippet'
    }
  }

  getListVideos(channelId: string) {
    let params = this.buildParams({
      channelId: channelId
    });
    let url = this.buildUrl('activities');
    return this.http.get<{ items: Array<any> }>(url, {
      params: params
    }).pipe(
      map(res => res.items)
    )
  }

  getDetailVideo(videoId: string) {
    let url = this.buildUrl('videos');
    let params = this.buildParams({
      id: videoId
    });
    return this.http.get<{ items: Array<any> }>(url, {
      params: params
    }).pipe(
      map(res => res.items)
    )
  }
  private buildParams(paramsData): HttpParams {
    let params = new HttpParams({ fromObject: this.defaultParams });
    Object.keys(paramsData).map(key => {
      params = params.append(key, paramsData[key]);
    });
    return params;
  }
  private buildUrl(endpoint: string): string {
    return this.url + endpoint;
  }
}
