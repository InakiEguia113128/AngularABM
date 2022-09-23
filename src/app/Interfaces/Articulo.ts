import { Categoria } from "./Categoria";

export interface Articulo{
    
    id:number;
    codigo:number;
    nombre:string;
    precio:number;
    stock:number;
    categoriaId:number;
    categoria:Categoria;
}