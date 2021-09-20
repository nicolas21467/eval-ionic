import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private registroservice:RegistroService,
                      private router:Router) { }

  ngOnInit() {
  }
  registrarse(    
    nombre:HTMLInputElement,
    contrasena:HTMLInputElement){
    const nom=nombre.value;
    const pas=contrasena.value;

    this.registroservice.addusuario(nom,pas);
    this.router.navigate(['/cuenta']);
    
    

  }

}
