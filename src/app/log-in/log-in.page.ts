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
  nombre: string;
  password: string;


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




    this.registroService.verifyusuario(nom,pas);      
    this.router.navigate(['/cuenta']);
  }
  async cambiar(){
    this.router.navigate(['/recuperar']);
  }
}