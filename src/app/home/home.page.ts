import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";

//import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    //public router: Router
    private navCtr: NavController
    ) {}
  //this.router.navigate(['']);

  goToCaracteristicasPage (ante: string){
    this.navCtr.navigateForward(`caracteristicas/${ante}`);
  }
  goToGlosarioPage (){
    this.navCtr.navigateForward(`glosario`);
  }
}
