import { Component, OnInit } from '@angular/core';
import { SettingService } from '@services/setting/setting.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  slpashModel: boolean;
  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit() {
    this.settingService.getShowSplash().then(show => {
      if(show==null){
        this.slpashModel = true;
      }
      else{
        this.slpashModel = false;
      }
    })
  }
  
  onToggleSplash(event){
    let checked = event.detail.checked;
    this.settingService.settingShowPlash(checked);
  }
}
