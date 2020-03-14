import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

import { DefinicionesService } from "../servicios/definiciones.service";

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.page.html',
  styleUrls: ['./glosario.page.scss'],
})
export class GlosarioPage implements OnInit {
 
  textoBuscar = '';

  constructor(
    private def: DefinicionesService,
    private navCtr: NavController
    ) { }

  ngOnInit() {
    
  }

  definiciones = this.def.definiciones

  goToDetailPage (palabra: string){
    this.navCtr.navigateForward(`detail/${palabra}`);
  }

  buscar (event) {
    this.textoBuscar = event.detail.value;
    console.log(this.textoBuscar);
  } 
}
