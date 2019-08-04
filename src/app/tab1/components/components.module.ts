import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



import { ListViewComponent } from './list-view/list-view.component';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListViewComponent,
    ListVideosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[
    ListViewComponent,
    ListVideosComponent
  ]
})
export class ComponentsModule { }
