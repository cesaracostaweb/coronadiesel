// app-routting
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importamos la pagina

import { HomeComponent } from './page/home/home.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ServicioComponent } from './page/servicio/servicio.component';
import { NavComponent } from './page/nav/nav.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { GraciasComponent } from './page/gracias/gracias.component';
import { NotFoundComponent } from './page/not-found/not-found.component';




const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contacto', component: ContactoComponent },
  {path: 'servicio', component: ServicioComponent },
  {path: 'nav', component: NavComponent },
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'gracias', component: GraciasComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
