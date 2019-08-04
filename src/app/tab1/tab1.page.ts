import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute,Router, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tabPages:Array<{name:string,url:string}>;
  activeUrl:string;
  constructor(
    private navCtrl:NavController,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.initTabPages();
    this.onNavigateTab();
  }

  initTabPages(){
    this.tabPages = [
      {name:'pooja',url:'tabs/tab1/pooja'},
      {name:'music',url:'tabs/tab1/music'},
      {name:'horo',url:'tabs/tab1/horo'},
    ];
    this.activeUrl = this.tabPages[0].url;
    this.navCtrl.navigateForward(this.tabPages[0].url);

  }
  goToTab(tabUrl:string){
    this.navCtrl.navigateForward(tabUrl);
  }

  onNavigateTab(){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        let url = event.urlAfterRedirects.slice(1);
        this.activeUrl = url;
      }
    })
  }
}
