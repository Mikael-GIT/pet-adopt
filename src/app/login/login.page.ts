/* eslint-disable object-shorthand */
import { ToastController } from '@ionic/angular';
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { LoginService } from './login.service';
import { Login } from './login.model';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginDados: Login = {
    email: '',
    senha: ''
  };

  constructor(
    private navCtrl: NavController,
    private loginService: LoginService,
    private serviceLS: LocalStorageService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  load: boolean = false;
  btnLogin: boolean = false;

  login() {
    if (this.loginDados.email != null && this.loginDados.senha != null) {
      //load true
      this.load = true;
      //btn login off
      this.btnLogin = true;

      if (this.loginDados) {
        this.loginService.login(this.loginDados).subscribe(
          (result) => {
            if (result.id != null) {
              this.serviceLS.set('user_id', result.id);
              this.navCtrl.navigateRoot('/tabs/tab1', { animationDirection: 'forward' });
            }
          },
          (error) => {
            this.presentToast('top', error.error.message);
          }
        );
      }
      this.load = false;
      this.btnLogin = false;
    }
  }


  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}

