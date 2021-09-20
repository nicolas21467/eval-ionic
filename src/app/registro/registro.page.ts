import { Component, OnInit } from '@angular/core';
import  {RegistroService} from '../registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user = []
  constructor(private registroservice:RegistroService) { }


  ngOnInit() {
    // traspasar los datos del servicio al atributo  
    this.user = this.registroservice.getUsuarios();
  }
  ionViewWillEnter()
  {
    this.user = this.registroservice.getUsuarios();
  }
}
