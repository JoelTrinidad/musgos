import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";

import { MusgosService } from "../servicios/musgos.service";

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.page.html',
  styleUrls: ['./caracteristicas.page.scss'],
})
export class CaracteristicasPage implements OnInit {

  ante: string;
  musgos = [];
  constructor(
    private navCtr: NavController,
    private route: ActivatedRoute,
    private mus: MusgosService
  ) { 
    this.ante = this.route.snapshot.paramMap.get('ante');
    this.musgos = this.mus.musgos.filter(musgo => musgo.antecesor == this.ante);
  }

  ngOnInit() {
    console.log(this.musgos)
  }

  goTo (genero: string, ante: string){
    if (genero != "") {
      this.navCtr.navigateForward(`genero/${genero}`);
    } else {
      this.navCtr.navigateForward(`caracteristicas/${ante}`);
    }
  }
  goToGlosarioPage (){
    this.navCtr.navigateForward(`glosario`);
  }
}
