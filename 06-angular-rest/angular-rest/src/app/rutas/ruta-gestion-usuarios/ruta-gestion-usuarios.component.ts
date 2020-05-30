import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {FILAS} from 'src/app/Constantes/numero-filas-por-tabla';
import {ModalEditarUsuarioComponent} from "src/app/modales/modal-editar-usuario/modal-editar-usuario.component";
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  FILAS = FILAS;

  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';

  busquedaUsuario = '';


  // INYECCION DE DEPENDENCIAS
  // DEPENDENCIAS -> Servicios!

  constructor(
    private readonly httpClient: HttpClient,
    private readonly MatDialog: MatDialog,
    private readonly usuarioRestService: UsuarioRestService
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
    const matDialogRefModalEditarUsuario = this.MatDialog
      .open(
        ModalEditarUsuarioComponent,
        {
          width: '600px',
          data: {
            usuario,
          }
        }
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario.afterClosed();

    respuestaDialogo$.subscribe(
      (datos) => {//try
        console.log('Datos 222', datos);
        if (datos) {
          this.editarUsuarioHTTP(usuario.id, datos);
        } else {

        }
      },
      (error) => {//catch
        console.log('Error', error)
      }
    );

  }

  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this.usuarioRestService.editar(id, datos);

    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => {
          console.log('DDDD', usuarioEditado);
          const indice = this.usuarios
            .findIndex(
              (usuario)=> {
                return usuario.id === id;
              }
            );

          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
          //this.usuarios[indice].rol = datos.rol;
        },
        (error) => {
          console.error(error);
        }
      );

  }

  eliminar(usuario) {
    const eliminar$ = this.usuarioRestService
      .eliminar(usuario.id);

    eliminar$
      .subscribe(
        (usuarioEliminado)=> {
          console.log(usuarioEliminado);
          // indice se usa para eliminar un elemento en un array.
          const indice = this.usuarios
            .findIndex(
              (usuarioBuscado)=> {
                return usuarioBuscado.id === usuario.id;
              }
            );

          this.usuarios.splice(indice, 1);
        },
        (error)=> {
          console.error(error);
        }

      );
  }

  usuariosFiltrados() {
    return this.usuarios.filter(
      (usuario) => {
        return usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
      }
    ).filter(
      (usuario) => {
        return usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase());
      }
    ).filter(
      (usuario) => {
        return usuario.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase());
      }
    ).filter(
      (usuario) => {
        return usuario.password.toLowerCase().includes(this.passwordFiltrado.toLowerCase());
      }
    );
  }

  buscar() {
    const busqueda$ = this.usuarioRestService
      .buscar(this.busquedaUsuario);

    busqueda$
      .subscribe(
        (usuarios)=> {
          this.usuarios = usuarios;
        },
        (error) => {
          console.log(error);
        }
      );
  }


}
