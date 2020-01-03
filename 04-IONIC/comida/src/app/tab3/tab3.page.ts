import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario = {
    nombre: '',
    correo: '',
    edad: 0,
    password: '',
    passwordConfirmation: ''
  };

  constructor() {}

  crearUsuario(formulario: NgForm) {
    console.log(formulario);
  }

  validarPasswordIguales(): boolean {
    if ( this.usuario.password === this.usuario.passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  }
}
