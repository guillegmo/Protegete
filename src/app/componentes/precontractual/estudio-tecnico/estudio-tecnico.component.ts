import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudio-tecnico',
  templateUrl: './estudio-tecnico.component.html',
  styleUrls: ['./estudio-tecnico.component.css']
})
export class EstudioTecnicoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  linkMaquinaria(){
    this.router.navigate(['maquinariaequipo/maquinariaequipo'])
  }

}
