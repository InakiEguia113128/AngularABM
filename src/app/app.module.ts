import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AltaArticuloComponent } from './alta-articulo/alta-articulo.component';
import { ListadoArticuloComponent } from './listado-articulo/listado-articulo.component';
import { ArticulosService } from './Servicios/articulos.service';
import { CategoriasService } from './Servicios/categorias.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AltaArticuloComponent,
    ListadoArticuloComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticulosService,CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
