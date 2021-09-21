import { Component, ErrorHandler, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { usuario } from '../usuario.model';

import { ActivatedRoute, Router } from '@angular/router'
import { RegistroService} from '../registro.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  user : usuario;


  constructor(
    private activatedRouter: ActivatedRoute,
    private alerta:AlertController,
    private router:Router,
    private registroService:RegistroService) {

     }

  ngOnInit() {}
  async ingresar(nombre:HTMLInputElement,
                  password:HTMLInputElement){
    const nom =     nombre.value
    const pas =     password.value

    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'error',
      subHeader: 'error',
      message: 'error.',
      buttons: ['ok']
    });

    if(nom === 'juan123'&& pas==='112233'){
    this.registroService.verifyusuario(nom,pas);     
    this.router.navigate(['/cuenta']);
    }
    else{
    await alert.present();
    }




  }
  async cambiar(){
    this.router.navigate(['/recuperar']);
  }
}