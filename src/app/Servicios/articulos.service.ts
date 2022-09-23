import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../Interfaces/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http:HttpClient) { }

  private url = "https://6317ca93f6b281877c5d7785.mockapi.io/articulo";

  obtenerArticulos():Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.url);
  }

  registrarArticulo(art:Articulo):Observable<any>{
    return this.http.post(this.url,art);
  }

  borrarArticulo(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }

  obtenerArticulo(id:number):Observable<Articulo>{
    return this.http.get<Articulo>(this.url+"/"+id);
  }

  editarArticulo(art:Articulo):Observable<any>{
    return this.http.put(this.url+"/"+art.id,art);
  }
}
