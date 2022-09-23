import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaArticuloComponent } from './alta-articulo/alta-articulo.component';
import { HomeComponent } from './home/home.component';
import { ListadoArticuloComponent } from './listado-articulo/listado-articulo.component';

const routes: Routes = [
  {path: "lista", component:ListadoArticuloComponent},
  {path:"alta",component:AltaArticuloComponent},
  {path:"actualizar/:id", component:AltaArticuloComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
