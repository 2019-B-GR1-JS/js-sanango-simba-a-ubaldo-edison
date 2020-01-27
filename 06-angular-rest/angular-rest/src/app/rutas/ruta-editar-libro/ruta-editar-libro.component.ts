import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-libro',
  templateUrl: './ruta-editar-libro.component.html',
  styleUrls: ['./ruta-editar-libro.component.scss']
})
export class RutaEditarLibroComponent implements OnInit {

  parametrosEditar;
  parametrosPapa;


  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.escucharParametrosPapa();
  }

  escucharParametrosEdicion() {
    const parametros$ = this._activatedRoute.params;
    parametros$.subscribe(
      (parametros) => {
        this.parametrosEditar = parametros.idLibro;
        this.cargarUsuariosyLibros();
      }
    );
  }

  escucharParametrosPapa() {
    const parametros$ = this._activatedRoute.parent.params;
    parametros$.subscribe(
      (parametros) => {
        this.parametrosPapa = parametros.idUsuario;
        this.escucharParametrosEdicion();
      }
    );
  }

  cargarUsuariosyLibros(){
    //AQUI SE PUEDE LLAMAR AL SERVIDOR CON LOS PARAMETROS DEL PAPA Y DEL HIJO
    console.log(this.parametrosPapa);
    console.log(this.parametrosEditar);
  }

}
