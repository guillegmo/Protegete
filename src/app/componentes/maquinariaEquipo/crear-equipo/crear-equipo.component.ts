import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/servicios/data.services';
import { Maquinaria } from './maquinaria';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  visible = false;
  texto = '1'; 
  equipo: any = [];
  
  nombreEquipo = '';
  marca = '';
  serial = '';
  modeloReferencia = ''; 
  placaInventario = ''; 
  descripcion = '';
  aseguradora = '';
  numeroPoliza = '';
  placaVehiculo = '';
  foto1 = '';
  foto2 = '';
  foto3 = '';
  foto4 = '';

  constructor(private dataServices: DataServices, private modal: NgbModal) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  openLG(contenido: any) {
    this.modal.open(contenido, { size: 'lg' });
  }

  openSM(contenido: any) {
    this.modal.open(contenido, { size: 'sm' });
  }

  openXL(contenido: any) {
    this.modal.open(contenido, { size: 'xl' });
  }

  cerrarModal() {
    this.modal.dismissAll();
  }
  
  crearEquipo(){
    let equipo1 = new Maquinaria(this.nombreEquipo, this.marca, this.serial, this.modeloReferencia, this.placaInventario, this.descripcion, this.aseguradora, this.numeroPoliza, this.placaVehiculo, this.foto1, this.foto2, this.foto3, this.foto4);
    this.dataServices.crearEquipo(equipo1).subscribe(
      (res) => {
        alert('Equipo creado con exito');
        this.obtenerEquipos();
        this.limpiarFormulario();
      },
      (error) => console.error(error)
    );
  }

  obtenerEquipos(){
    this.dataServices.cargarEquipos().subscribe(
      (res) => {
        this.equipo = res;
        console.log(this.equipo);
      },
      (error) => console.error(error)
    );
  }

  eliminarEquipo(id: number){
    this.dataServices.eliminarEquipo(id).subscribe(
      (res) => {
        console.log(res);
        this.obtenerEquipos();
        alert('Equipo Eliminado con Exito: ' + id);
      },
      (err) => console.log(err)
    );
  }

  limpiarFormulario() {
    this.nombreEquipo = '';
    this.marca = '';
    this.serial = '';
    this.modeloReferencia = ''; 
    this.placaInventario = ''; 
    this.descripcion = '';
    this.aseguradora = '';
    this.numeroPoliza = '';
    this.placaVehiculo = '';
    this.foto1 = '';
    this.foto2 = '';
    this.foto3 = '';
    this.foto4 = '';
  }

}
