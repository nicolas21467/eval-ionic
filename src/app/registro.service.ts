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
    },
    {
      id: 3,
      nombre:'erick',
      contrasena:'juan'
    }

  ]
  constructor() { }
  getUsuarios(){return this.user
  }
  getUsuario(id:number){
    return this.user.find(x=>{return x.id==id})
  }
  getnombre(nombre:string){
    return this.user.find(x=>{return x.nombre==nombre})
    }
  getcontrasena(contrasena:string){
    return this.user.find(x=>x.contrasena==contrasena)}
  
  addusuario(nombre:string,contrasena:string){
    this.user.push({
        id :this.user.length +1,
        nombre :nombre,
        contrasena:contrasena
    })


  }
}
