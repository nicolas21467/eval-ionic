import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private user: usuario[] = [
    {
      id        : 1,
      nombre    : 'juan123',
      contrasena: '1122333'
    },
    {
      id : 2,
      nombre: 'ana',
      contrasena:'anita'
    }

  ]
  constructor() { }
  getUsuarios(){return this.user
  }
  getUsuario(id:number){
    return this.user.find(y=>{return y.id==id})
  }
  verifyusuario(nombre:string,contrasena:string){
    return this.user.find(x=>{return x.nombre==nombre,
                                     x.contrasena==contrasena})
    }
  
  addusuario(nombre:string,contrasena:string){
    this.user.push({
        id :this.user.length +1,
        nombre :nombre,
        contrasena:contrasena
    })


  }
}
