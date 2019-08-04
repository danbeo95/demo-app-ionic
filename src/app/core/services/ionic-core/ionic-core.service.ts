import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicCoreService {
  mLoading: HTMLIonLoadingElement;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl:ModalController
  ) {

  }

  // show loading
  async showLoading(message?: string) {
    this.mLoading = await this.loadingCtrl.create({
      duration: 20000,
      spinner: 'crescent',
      message: message ? message : 'Vui lòng đợi !',
    });
   return this.mLoading.present();
  }
  // hide loading
  hideLoading() {
    if (this.mLoading) {
      this.mLoading.dismiss().then(() => {
        this.mLoading = null;
      });
    }
  }

  // show toast
  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      color: 'danger',
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

  // show alert
  async showAlert(options: { header?: string, message?: string, cssClass?: string, buttons?: Array<{ text: string, id: number }> }, callback: any) {
    let buttons: Array<{ text: string, handler: any }> = [];
    if (options.buttons) {
      options.buttons.map((button) => {
        buttons.push({
          text: button.text,
          handler: () => { callback(button.id) }
        })
      })
    }
    else {
      buttons = [
        { text: 'Ok', handler: () => callback(1) },
        { text: 'Huỷ', handler: () => callback(0) }
      ]
    }
    const alert = await this.alertCtrl.create({
      header: options.header ? options.header : 'Thông Báo',
      message: options.message ? options.message : '',
      buttons: buttons,
      cssClass: options.cssClass ? options.cssClass : ''
    });
    alert.present();
  }
  // show alert error
  async showAlertError(options: { header?: string, message?: string, buttons?: Array<{ text: string, id: number }> }, callback: any) {
    let buttons: Array<{ text: string, handler: any }> = [];
    buttons = [
      { text: 'Ok', handler: () => callback(1) },
    ];
    const alert = await this.alertCtrl.create({
      header: options.header ? options.header : 'Lỗi',
      message: options.message ? '<div><img src="assets/imgs/error.png"></div>'+options.message  : '<div><img src="assets/imgs/error.png"></div>',
      buttons: buttons,
      cssClass: 'smt-alert-error'
    });
    alert.present();
  }

  // create modal

   createModal(component:any){
    const modal = this.modalCtrl.create({
      component:component
    });
    return modal;
  }
}
