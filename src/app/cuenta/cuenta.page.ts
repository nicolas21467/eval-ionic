import { Component, OnInit } from '@angular/core';
import{usuario}from'../usuario.model';
import { RegistroService } from '../registro.service';


import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  usuario:usuario;
  user:[]

  constructor(    
    private router: Router,
    private RegistroService: RegistroService,
    private activatedRouter: ActivatedRoute){

    }


  ngOnInit(){
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const name = paramMap.get('nombre') 
      this.usuario = this.RegistroService.getnombre(String(name));
    })
  }
}