import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  nombre:string = "Andres Logan";
  nota:number = 10;

  constructor() { }

  cambiar_nombre(){

    this.nombre = "Wolverine xD";

  }



}
