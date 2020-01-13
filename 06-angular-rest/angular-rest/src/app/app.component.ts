import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FILAS } from './Constantes/numero-filas-por-tabla'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  FILAS = FILAS;

  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';


  // INYECCION DE DEPENDENCIAS
  // DEPENDENCIAS -> Servicios!

  constructor(
    private readonly httpClient: HttpClient
  ) {
    // CASI NUNCA HACER CONFIGURACIONES
  }

  ngOnInit(): void {
    // http://localhost:1337 + /usuario

    // CORS
    // http://localhost:4200 -> http://localhost:1337
    // http://gmail.com -> http://facebook.com
    const urlUsuarios = this.url + '/usuario';
    // $ -> Observable
    const usuarios$ = this.httpClient.get(
      urlUsuarios
    );
    usuarios$
      .subscribe(
        (usuarios: any[]) => { // TRY
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando usuarios'
          });
        }
      );
  }

  editar(usuario) {
    console.log('Editando usuario', usuario);
  }

  eliminar(usuario) {
    console.log('Eliminando usuario', usuario);
  }

  usuariosFiltrados() {
    return this.usuarios.filter(
      (usuario) => {
          return usuario.nombre.toLowerCase().includes(this.nombreFiltrado);
      }
    ).filter(
      (usuario) => {
        return usuario.apellido.toLowerCase().includes(this.apellidoFiltrado);
      }
    ).filter(
      (usuario) => {
        return usuario.correo.toLowerCase().includes(this.correoFiltrado);
      }
    ).filter(
      (usuario) => {
        return usuario.password.toLowerCase().includes(this.passwordFiltrado);
      }
    );
  }

}