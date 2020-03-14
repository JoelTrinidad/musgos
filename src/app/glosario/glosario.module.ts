import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlosarioPageRoutingModule } from './glosario-routing.module';

import { GlosarioPage } from './glosario.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlosarioPageRoutingModule,
    PipesModule
  ],
  declarations: [GlosarioPage]
})
export class GlosarioPageModule {}
