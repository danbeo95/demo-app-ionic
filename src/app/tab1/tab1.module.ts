import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: Tab1Page,
    children: [
      { path: 'horo', loadChildren: './horo/horo.module#HoroPageModule' },
      { path: 'music', loadChildren: './music/music.module#MusicPageModule' },
      { path: 'pooja', loadChildren: './pooja/pooja.module#PoojaPageModule' },
      { path: '',redirectTo:'pooja' }
    ]
  }
]
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
