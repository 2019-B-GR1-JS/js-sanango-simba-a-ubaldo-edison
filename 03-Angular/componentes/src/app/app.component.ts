import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fecha = new Date();
  sueldo = 12.001;
  universidad = 'Escuela Politecnica Nacional';


  title = 'componentes';
  arregloObjetos = [
    {
      id: 1,
      nombre: "Edison", //string
      apellido: 'Sanango', //string
      sueldo: 12.12, //number
      casado: false, //boolean
      comida: "https://images.clarin.com/2019/08/30/de-la-invencion-de-la___hLWb7dc-8_1256x620__1.jpg", //
      carro: null,
      ojos: undefined,
      w: "200",
      h: "200",
    },
   {
      id: 2,
      nombre: "Pedro", //string
      apellido: 'Rocha', //string
      sueldo: 22.12, //number
      casado: true, //boolean
      comida: "data:image/jpeg;base64,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", //
      carro: null,
      ojos: undefined,
    },
    {
      id: 3,
      nombre: "Bolivar", //string
      apellido: 'Jaramillo', //string
      sueldo: 32.12, //number
      casado: false, //boolean
      comida: "https://titania.marfeel.com/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/78e/458/78e458c5a29ae47ee828218afc325961/por-que-el-desayuno-es-la-comida-mas-importante-si-quieres-estar-delgado.jpg?mtime=1500459950", //
      carro: null,
      ojos: undefined,
    }
  ]

  imprimirSueldo(sueldo: String) {
    console.log(sueldo);
  }

  aumenarWH(pixeles: String) {
    console.log(pixeles);
  }
}
