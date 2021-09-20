import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }


  async tostada() {
    const toast = await this.toastController.create({
      message: 'se enviara una clave a su cuenta.',
      duration: 2000
    });
    toast.present();
  }
}
