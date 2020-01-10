import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {
//Inyeccion de dependencias
  constructor(
    //Dependecias: http
    private readonly _httpClient: HttpClient //servicio http

  ){

  }


}
