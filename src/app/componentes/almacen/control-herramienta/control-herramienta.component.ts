import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-herramienta',
  templateUrl: './control-herramienta.component.html',
  styleUrls: ['./control-herramienta.component.css']
})
export class ControlHerramientaComponent implements OnInit {

  herramientas = [
    'Herramienta 1',
    'Herramienta 2',
    'Herramienta 3',
    'Herramienta 4',
    'Herramienta 5',
    'Herramienta 6',
    'Herramienta 7',
    'Herramienta 8',
    'Herramienta 9',
    'Herramienta 10',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
