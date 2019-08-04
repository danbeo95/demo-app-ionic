import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-horo',
  templateUrl: './horo.page.html',
  styleUrls: ['./horo.page.scss'],
})
export class HoroPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      lastName: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      otp: this.fb.control('', [Validators.required, Validators.maxLength(4)]),
      phoneNumber: this.fb.control('', [Validators.required, Validators.maxLength(12)]),
    })
  }
  onClickSubmit() {
    if (this.doValidForm()) {
      this.showToast('Register success !','secondary');
      setTimeout(()=>{
        this.navCtrl.navigateRoot(['splash']);
      },4000);
    }
  }

  doValidForm() {
    if (this.registerForm.get('firstName').invalid) {
      if (this.registerForm.get('firstName').hasError('required')) {
        this.showToast('Please enter first name !', 'danger');
      }
      if (this.registerForm.get('firstName').hasError('maxlength')) {
        this.showToast('First name limit 20 characters !', 'danger');
      }
      return false;
    }

    else if (this.registerForm.get('lastName').invalid) {
      if (this.registerForm.get('lastName').hasError('required')) {
        this.showToast('Please enter last name !', 'danger');
      }
      if (this.registerForm.get('lastName').hasError('maxlength')) {
        this.showToast('Last name limit 20 characters !', 'danger');
      }
      return false;
    }

    else if (this.registerForm.get('phoneNumber').invalid) {
      if (this.registerForm.get('phoneNumber').hasError('required')) {
        this.showToast('Please enter phone number !', 'danger');
      }
      if (this.registerForm.get('phoneNumber').hasError('maxlength')) {
        this.showToast('Phone number limit 20 characters !', 'danger');
      }
      return false;
    }

    else if (this.registerForm.get('email').invalid) {
      if (this.registerForm.get('email').hasError('required')) {
        this.showToast('Please enter email !', 'danger');
      }
      if (this.registerForm.get('email').hasError('email')) {
        this.showToast('Plase enter valid email !', 'danger');
      }
      return false;
    }
    else if (this.registerForm.get('otp').invalid) {
      if (this.registerForm.get('otp').hasError('required')) {
        this.showToast('Please enter otp !', 'danger');
      }
      if (this.registerForm.get('otp').hasError('maxlength')) {
        this.showToast('Otp limit 4 characters !', 'danger');
      }
      return false;
    }
    return true;
  }
  async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'top',
      color: color,
      duration: 4000
    });
    toast.present();
  }
}
