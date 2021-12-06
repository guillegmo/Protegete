import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrega-dotacion',
  templateUrl: './entrega-dotacion.component.html',
  styleUrls: ['./entrega-dotacion.component.css']
})
export class EntregaDotacionComponent implements OnInit {

  dotacion = [
    'Camiseta',
    'Pantalon',
    'Overol',
    'Zapatos',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
