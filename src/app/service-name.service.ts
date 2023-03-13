import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {
 
  handlerMessage = '';
  constructor(
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  async showLoading(msg:any) {
    const loading = await this.loadingCtrl.create({
      message: msg,
      spinner: 'circles',
    });

    loading.present();
  }

  dismissLoader(){
    this.loadingCtrl.dismiss();
  }
  
  async presentAlert(msg:any) {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
        ],
      
    });
    await alert.present();  
    const result = await alert.onDidDismiss();  
  
    await alert.present();
  }
}
  


