import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ServicioComponent } from './page/servicio/servicio.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { HomeComponent } from './page/home/home.component';
import { NavComponent } from './page/nav/nav.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { GraciasComponent } from './page/gracias/gracias.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContactoComponent,
    ServicioComponent,
    NotFoundComponent,
    HomeComponent,
    NavComponent,
    NosotrosComponent,
    GraciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
