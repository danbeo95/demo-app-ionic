import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsModule } from './modals/modals.module';
import { ServicesModule } from './services/services.module';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalsModule,
    ServicesModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ]
})
export class CoreModule { }
