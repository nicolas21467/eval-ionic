import { Component, ErrorHandler, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { usuario } from '../usuario.model';

import { ActivatedRoute, Router } from '@angular/router'
import { RegistroService} from '../registro.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  user : usuario;
  nombre: string;


  constructor(
    private activatedRouter: ActivatedRoute,
    private alerta:AlertController,
    private router:Router,
    private registroService:RegistroService) {

     }

  ngOnInit() {}
  async ingresar(nombre:HTMLInputElement,
                  password:HTMLInputElement){
    const nom = nombre.value
    const pas =     password.value  
    this.nombre= String(nom);  

    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: '¡error de validacion!',
      subHeader: 'contraseña o usuario',
      message: 'el usuario o contraseña no son validos por favor ingrese de nuevo.',
      buttons: ['entendido']
    });

    if(this.nombre === '' || pas===''){
    await alert.present();
    }
    else{

    this.router.navigate(['/cuenta']);
    };




  }
}