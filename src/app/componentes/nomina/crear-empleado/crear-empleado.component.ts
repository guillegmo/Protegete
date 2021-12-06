import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from './empleado';
import { DataServices } from 'src/app/servicios/data.services';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css'],
})
export class CrearEmpleadoComponent implements OnInit {
  mensaje = false;

  empleado: Empleado = {
    idEmpleado: '',
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    direccion: '',
    ciudadResidencia: '',
    telefono: '',
    email: '',
    EPS: '',
    ARL: '',
    fondoPension: '',
    fondoCesantias: '',
    cajaCompensacion: '',
    cargo: '',
    profesion: '',
    salario: '',
    fechaIngreso: '',
  };

  constructor(private dataServices: DataServices) {}

  empleados: any = [];

  ngOnInit(): void {
    this.dataServices.cargarEmpleados().subscribe(
      (res) => {
        this.empleados = res;
      },
      (error) => console.error(error)
    );
  }

  agregarEmpleado() {
    this.dataServices.crearEmpleado(this.empleado).subscribe(
      (res) => {
        console.log('Empleado Guardado');
        this.limpiarFormulario();
        this.mensaje = true;
      },
      (error) => console.error(error)
    );
  }

  limpiarFormulario() {
    this.empleado = {
      idEmpleado: '',
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',
      direccion: '',
      ciudadResidencia: '',
      telefono: '',
      email: '',
      EPS: '',
      ARL: '',
      fondoPension: '',
      fondoCesantias: '',
      cajaCompensacion: '',      
      cargo: '',
      profesion: '',
      salario: '',
      fechaIngreso: '',
    };
  }

}
