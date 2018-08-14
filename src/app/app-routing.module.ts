import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { InicioComponent} from './inicio/inicio.component';
import { LugaresComponent} from './lugares/lugares.component';
import { QuienesComponent} from './quienes/quienes.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CentrosComponent} from './centros/centros.component';
import { LibroDetalleComponent} from './libro-detalle/libro-detalle.component';
import { CategoriaDetalleComponent} from './categoria-detalle/categoria-detalle.component';
import { CategoriaBetsellersComponent } from './categoria-betsellers/categoria-betsellers.component';
import { CategoriaNuevosLanzamientosComponent } from './categoria-nuevos-lanzamientos/categoria-nuevos-lanzamientos.component';
import { CategoriaClasicosComponent } from './categoria-clasicos/categoria-clasicos.component';
import { CategoriaInfantilesComponent } from './categoria-infantiles/categoria-infantiles.component';
import { CategoriaJuvenilesComponent } from './categoria-juveniles/categoria-juveniles.component';
import { CategoriaSegundaManoComponent } from './categoria-segunda-mano/categoria-segunda-mano.component';
import { CategoriaComicsComponent } from './categoria-comics/categoria-comics.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'lugares',
    component: LugaresComponent
  },
  {
    path: 'quienes',
    component: QuienesComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
     path: 'centros',
     component: CentrosComponent
  },
  {
    path: 'libro-detalle',
    component: LibroDetalleComponent
 },
 {
  path: 'categoria-detalle',
  component: CategoriaDetalleComponent
},
{
  path: 'categoria-betsellers',
  component: CategoriaBetsellersComponent
},
{
path: 'categoria-nuevos-lanzamientos',
component: CategoriaNuevosLanzamientosComponent
},
{
  path: 'categoria-clasicos',
  component: CategoriaClasicosComponent
},
{
path: 'categoria-infantiles',
component: CategoriaInfantilesComponent
},
{
  path: 'categoria-juveniles',
  component: CategoriaJuvenilesComponent
},
{
path: 'categoria-segunda-mano',
component: CategoriaSegundaManoComponent
},
{
  path: 'categoria-comics',
  component: CategoriaComicsComponent
  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
