import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from '../Servicios/articulos.service';
import { CategoriasService } from '../Servicios/categorias.service';
import { Categoria } from '../Interfaces/Categoria';
import { Subscription } from 'rxjs';
import { Articulo } from '../Interfaces/Articulo';

@Component({
  selector: 'app-alta-articulo',
  templateUrl: './alta-articulo.component.html',
  styleUrls: ['./alta-articulo.component.css']
})
export class AltaArticuloComponent implements OnInit,OnDestroy {

  constructor(private router:Router, private servicioCategoria:CategoriasService, private servicioArticulo:ArticulosService, private param:ActivatedRoute) {
    this.id = param.snapshot.params["id"];
   }

  titulo:string = ""
  bandera = false;
  id:number = 0;


  ngOnInit(): void {
    this.getCategorias();
    this.cargarForm();
  }

  categorias: Categoria[] = [];
  private subscription:Subscription = new Subscription();
  articulo = {} as Articulo;

  getCategorias(){
    this.subscription.add(
      this.servicioCategoria.obtenerCategorias().subscribe({
        next: (resultado) => {this.categorias = resultado},
        error: (error) => {console.log(error.status)}
      })
    )
  }

  cancelar(){
    this.router.navigateByUrl("")
  }

  altaArticulo(){

    if(this.bandera == false){
        this.subscription.add(
          this.servicioArticulo.registrarArticulo(this.articulo).subscribe({
            next: () => {alert("Se registro un nuevo articulo");
                        this.router.navigateByUrl("")},
            error: (error) =>{console.log(error.status)}
          })
        )
    }
    if(this.bandera){
      this.subscription.add(
        this.servicioArticulo.editarArticulo(this.articulo).subscribe({
          next: () => {alert("Se edito un nuevo articulo");
                      this.router.navigateByUrl("")},
          error: (error) =>{console.log(error.status)}
        })
      )
    }
  }

  cargarForm(){
    if(this.id != null){
      this.titulo = "Editanto articulo"
      this.bandera =true;
      this.subscription.add(
        this.servicioArticulo.obtenerArticulo(this.id).subscribe({
          next: (resultado) => {this.articulo = resultado},
          error: (error) =>{console.log(error.status)}
        })
      )

    }
    else{
      this.titulo ="Alta articulo"
    }
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
