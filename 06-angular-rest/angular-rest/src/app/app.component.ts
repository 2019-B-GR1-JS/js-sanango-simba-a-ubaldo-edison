import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337'
  usuarios = [];

  constructor(
    private readonly _httpClient: HttpClient
  ) {
    //NO HACER CONFIGURACIONES
  }

  ngOnInit(): void {

    //CORS
    const urlUsuarios = this.url + '/usuario';
    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );

    usuarios$
      .subscribe(
        (user)=>{ //TRY
          this.usuarios = user;
          console.log('Usuarios: ',user);
        },
        (error)=>{ //CATCH
            console.error({
              error: error,
              mensaje: 'Error consultando usuarios'
            })
        }
      )

  }

  editar(usuario){
    console.log('Editando usuario', usuario);
  }

  eliminar(usuario) {
    console.log('Eliminando usuario', usuario);
  }

}
