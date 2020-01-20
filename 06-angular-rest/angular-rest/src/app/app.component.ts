import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FILAS} from './Constantes/numero-filas-por-tabla'
import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {MatDialog} from '@angular/material/dialog';
import {UsuarioRestService} from "./services/rest/usuario-rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
  }
}
