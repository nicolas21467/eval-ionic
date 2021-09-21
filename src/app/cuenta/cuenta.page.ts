import { Component, OnInit } from '@angular/core';
import{usuario}from'../usuario.model';
import { RegistroService } from '../registro.service';

import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  user:usuario;

  constructor(    
    private router: Router,
    private RegistroService: RegistroService,
    private activatedRouter: ActivatedRoute,
    private menu:MenuController){

    }
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
  
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }


  ngOnInit()     {
    this.activatedRouter.paramMap.subscribe(paramMap =>{
        const id = Number(paramMap.get('id')) // convertir a number pq es string
        this.user = this.RegistroService.getUsuario(id); // llamada al servicio para obtener playa
      })
  }


}
