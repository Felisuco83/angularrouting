import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'

//TODOS LOS COMPONENTES QUE DESEAMOS DIBUJAR DENTRO DE LA ZONA DE RUTAS

import { BlackflagComponent } from './components/rutas/blackflag/blackflag.component';
import { DbzComponent } from './components/rutas/dbz/dbz.component';
import { MgsComponent } from './components/rutas/mgs/mgs.component';
import { SyndicateComponent } from './components/rutas/syndicate/syndicate.component';
import { Error404Component } from './error404/error404.component';
import { NumerodobleComponent } from './numerodoble/numerodoble.component';

//NOS CREAMOS UN ARRAY DE RUTAS, LAS RUTAS LLEVAN IMPLÍCITA LA BARRA / POR LO QUE NO HAY QUE PONERLAS SI SON DESDE LA RAIZ

const appRoutes: Routes = [
  { path: '', component: BlackflagComponent },
  { path: 'dbz', component: DbzComponent },
  { path: 'mgs', component: MgsComponent },
  { path: 'syndicate', component: SyndicateComponent },
  { path: 'numerodoble', component: NumerodobleComponent },
  { path: 'numerodoble/:numero', component: NumerodobleComponent },
  { path: '**', component: Error404Component },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
