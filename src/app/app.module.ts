import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { LugaresComponent } from './lugares/lugares.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CentrosComponent } from './centros/centros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { CategoriaDetalleComponent } from './categoria-detalle/categoria-detalle.component';
import { ListaInicioComponent } from './lista-inicio/lista-inicio.component';
import { CategoriaBetsellersComponent } from './categoria-betsellers/categoria-betsellers.component';
import { CategoriaNuevosLanzamientosComponent } from './categoria-nuevos-lanzamientos/categoria-nuevos-lanzamientos.component';
import { CategoriaClasicosComponent } from './categoria-clasicos/categoria-clasicos.component';
import { CategoriaInfantilesComponent } from './categoria-infantiles/categoria-infantiles.component';
import { CategoriaJuvenilesComponent } from './categoria-juveniles/categoria-juveniles.component';
import { CategoriaSegundaManoComponent } from './categoria-segunda-mano/categoria-segunda-mano.component';
import { CategoriaComicsComponent } from './categoria-comics/categoria-comics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    LugaresComponent,
    QuienesComponent,
    ContactoComponent,
    CentrosComponent,
    LibroDetalleComponent,
    CategoriaDetalleComponent,
    ListaInicioComponent,
    CategoriaBetsellersComponent,
    CategoriaNuevosLanzamientosComponent,
    CategoriaClasicosComponent,
    CategoriaInfantilesComponent,
    CategoriaJuvenilesComponent,
    CategoriaSegundaManoComponent,
    CategoriaComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
