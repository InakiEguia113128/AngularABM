import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articulo } from '../Interfaces/Articulo';
import { Categoria } from '../Interfaces/Categoria';
import { ArticulosService } from '../Servicios/articulos.service';
import { CategoriasService } from '../Servicios/categorias.service';

@Component({
  selector: 'app-listado-articulo',
  templateUrl: './listado-articulo.component.html',
  styleUrls: ['./listado-articulo.component.css']
})
export class ListadoArticuloComponent implements OnInit,OnDestroy {

  constructor(private servicioArticulo:ArticulosService, private route:Router, private servicioCategoria:CategoriasService) { }

  articulos: Articulo[] = [];
  categorias: Categoria[] = [];
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.subscription.add(
      this.servicioCategoria.obtenerCategorias().subscribe({
        next: (resultado) => {this.getArticulos(resultado), console.log(resultado)},
        error: (error) => {console.log(error.status)}
      })
    )
  }

  getArticulos(cats: Categoria[]) : void {
    this.subscription.add(
      this.servicioArticulo.obtenerArticulos().subscribe({
        next: (result) => {
          this.articulos = result;
          this.categorias = cats;
          this.articulos.forEach((x) => {
              x.categoria = {} as Categoria;
              x.categoria.id = x.categoriaId;
              x.categoria.nombre = cats.find(f => f.id == x.categoriaId)?.nombre ?? "Inexistente";
          }); 
        },
        error: (error) => {console.log(error)}
      }))
  }

  agregarArticulo(){
    this.route.navigateByUrl("/alta")
  }

  borrar(id:number){
    this.subscription.add(
      this.servicioArticulo.borrarArticulo(id).subscribe({
        next: () => {alert("Se borro un articulo"),
                    this.getCategorias()},
        error: (error) => (console.log(error.status))
      })
    )
  }

  editar(id:number){
    this.route.navigateByUrl("/actualizar/"+id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
