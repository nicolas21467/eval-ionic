import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {


  constructor(private registroservice:RegistroService,
                      private router:Router,
                      private Alertcontroler:AlertController) { }


  ngOnInit() {
  }
  async registrarse(    
    nombre:HTMLInputElement,
    contrasena:HTMLInputElement,
    vericontrasena:HTMLInputElement){
    const nom=String(nombre);
    const pas=contrasena.value;
    const vali=vericontrasena.value;


    const alert = await this.Alertcontroler.create({
      cssClass: 'my-custom-class',
      header: '¡error!',
      subHeader: 'contraseña o usuario',
      message: 'por favor rellene el formulario',
      buttons: ['entendido']
    });

    if(nom===''&& pas!=vali){
      await alert.present();
    }

    else{
    this.router.navigate(['/this.nombre']);

    }

    
    
  }

}
