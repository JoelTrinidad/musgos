import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GenerosService } from "../servicios/generos.service";

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  genero: string;
  generos;

  constructor(
    private route: ActivatedRoute,
    private gen: GenerosService
  ) { 
    this.genero = this.route.snapshot.paramMap.get('genero');
    this.generos = this.gen.generos.filter( x => x.nombre == this.genero);
  }

  ngOnInit() {
  }

}
