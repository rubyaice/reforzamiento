import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css']
})
export class EstructuralesComponent implements OnInit {

  existo:boolean = false;
  mutantes:string[] = ["Wolverine", "Ciclope", "Magneto"];

  constructor() { }

  ngOnInit() {
  }

}
