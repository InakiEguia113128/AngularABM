import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }

  private url = "https://6317ca93f6b281877c5d7785.mockapi.io/categoria";

  obtenerCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }


}
