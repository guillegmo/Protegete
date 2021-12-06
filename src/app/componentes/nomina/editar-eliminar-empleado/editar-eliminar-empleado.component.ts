import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/servicios/data.services';
import { Empleado } from '../crear-empleado/empleado';

@Component({
  selector: 'app-editar-eliminar-empleado',
  templateUrl: './editar-eliminar-empleado.component.html',
  styleUrls: ['./editar-eliminar-empleado.component.css']
})
export class EditarEliminarEmpleadoComponent implements OnInit {

  constructor(private dataServices: DataServices, private modal: NgbModal) {}

  empleados: any = [];

  ngOnInit(): void {
     this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.dataServices.cargarEmpleados()
    .subscribe(
      res => {
        this.empleados = res;
        console.log(this.empleados);
      },
      error => console.error(error)
    );
  }

  eliminarEmpleado(id: number) {
    this.dataServices.eliminarEmpleado(id).subscribe(
      res => {
        console.log(res);
        this.obtenerEmpleados();
        alert('Empleado Eliminado Exitosamente: '+id);
      },
      err => console.log(err)
    );
  }

  actualizarEmpleado(empleado: Empleado) {
    this.dataServices.actualizarEmpleado(empleado).subscribe(
      res => {
        console.log(res);
        this.obtenerEmpleados();
      },
      err => console.log(err)
    );
    this.cerrarModal();
  }

  arreglo(array: any[]){
    alert("Empleado Actualizado");
    let empleadoActualizar = new Empleado(array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8],array[9],array[10],array[11],array[12],array[13],array[14],array[15],array[16],array[17]);
    this.actualizarEmpleado(empleadoActualizar);
  }


  openLG(contenido: any){
    this.modal.open(contenido,{size: 'lg'});
  }

  openSM(contenido: any){
    this.modal.open(contenido,{size: 'sm'});
  }

  openXL(contenido: any){
    this.modal.open(contenido,{size: 'xl'});
  }

  cerrarModal(){
    this.modal.dismissAll();
  }

}
