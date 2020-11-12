import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  public doble: number;
  public numero: number;
  
  //CREAMOS UN MÉTODO PARA LA REDIRECCIÓN, EN ESTE EJEMPLO HACIA SI MISMO
  redirect(numero) {
    this._router.navigate(["/numerodoble", numero]);
  }
  //DEBEMOS INYECTAR LOS 2 OBJETOS PARA PODER RECUPERAR RUTAS
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {
   }

  ngOnInit(): void {
    //DEBEMOS SUSCRIBIRNOS AL PARAMETRO PARA PODER RECIBIRLO, DENTRO DE PARAMS VIENEN POR SU :name
    this._activeRoute.params.subscribe(( params: Params ) => {

      //HEMOS CREADO RUTA CON Y SIN NUMERO, HAY QUE COMPROBAR SI TENEMOS O NO PARAMETRO
      if (params.numero != null){
        //LOS PARAMETROS SON STRING AUNQUE SEAN NUMÉRICOS
        this.numero = parseInt(params.numero);
        this.doble = this.numero * 2;
      } else {
        console.log("No hay parámetros");
      }
    });
  }

}
