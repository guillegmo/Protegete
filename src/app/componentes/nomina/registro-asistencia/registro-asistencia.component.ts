import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from 'src/app/servicios/data.services';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.component.html',
  styleUrls: ['./registro-asistencia.component.css']
})
export class RegistroAsistenciaComponent implements OnInit {

  constructor(private dataServices: DataServices, private router: Router) {}

  empleados: any = [];

  ngOnInit(): void {
    this.dataServices.cargarEmpleados()
    .subscribe(
      res => {
        this.empleados = res;
      },
      error => console.error(error)
    );
  }

  registrarAsistencia() {
    this.router.navigate(['registroyconsultasdeejecucion/bitacora']);
  }

}
