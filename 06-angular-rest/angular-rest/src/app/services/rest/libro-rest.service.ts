import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LibroRestService {
// Inyeccion de dependencias
  url = environment.url + '/libro';

  constructor(
    // Dependecias: http
    private readonly httpClient: HttpClient, // servicio http
  ) {

  }

  editar(id:number,datos) : Observable<any> {
    const urlEditar = this.url + '/' + id;
    return this.httpClient
      .put(
        urlEditar,
        datos
      );
  }

  crear(datos) : Observable<any> {
    const urlCrear = this.url;
    return this.httpClient
      .post(
        urlCrear,
        datos
      );
  }

  buscar(busqueda: string) : Observable<any> {
    let consulta = '';
    if(busqueda ){
      consulta =  '?' + busqueda;
    }

    const urlBuscar = this.url + consulta;
    console.log(urlBuscar);
    return this.httpClient.get(urlBuscar);

  }

  eliminar(id: number): Observable<any> {
    const urlEliminar = this.url + '/' + id;
    return this.httpClient.delete(urlEliminar);

  }


}
