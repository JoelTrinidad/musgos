import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DefinicionesService } from "../servicios/definiciones.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  palab: string;
  definicion;
  constructor(
    private route: ActivatedRoute,
    private def: DefinicionesService
  ) {
      this.palab = this.route.snapshot.paramMap.get('palabra');
      this.definicion = this.definiciones.filter(defi => defi.palabra == this.palab);
   }

  ngOnInit() {
  }

  definiciones = this.def.definiciones;
  
  

  
  
}
