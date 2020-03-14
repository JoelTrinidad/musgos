import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'glosario',
    loadChildren: () => import('./glosario/glosario.module').then( m => m.GlosarioPageModule)
  },
  {
    path: 'detail/:palabra',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'caracteristicas/:ante',
    loadChildren: () => import('./caracteristicas/caracteristicas.module').then( m => m.CaracteristicasPageModule)
  },
  {
    path: 'genero/:genero',
    loadChildren: () => import('./genero/genero.module').then( m => m.GeneroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
