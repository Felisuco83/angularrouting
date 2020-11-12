import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlackflagComponent } from './components/rutas/blackflag/blackflag.component';
import { DbzComponent } from './components/rutas/dbz/dbz.component';
import { MgsComponent } from './components/rutas/mgs/mgs.component';
import { SyndicateComponent } from './components/rutas/syndicate/syndicate.component';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { Error404Component } from './error404/error404.component';
import { NumerodobleComponent } from './numerodoble/numerodoble.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackflagComponent,
    DbzComponent,
    MgsComponent,
    SyndicateComponent,
    MenuComponent,
    Error404Component,
    NumerodobleComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
