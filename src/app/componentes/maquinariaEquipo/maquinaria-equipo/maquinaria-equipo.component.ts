import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Maquinaria } from '../crear-equipo/maquinaria';

@Component({
  selector: 'app-maquinaria-equipo',
  templateUrl: './maquinaria-equipo.component.html',
  styleUrls: ['./maquinaria-equipo.component.css']
})
export class MaquinariaEquipoComponent implements OnInit {

  maquinaria: Maquinaria[] = [
    new Maquinaria('Retroexcavadora', 'Caterpila', 'afsdfsd', '2021CATEX', 'CAT123456', 'Restroexcavadora todo terreno', '', '', '','https://www.gruasyaparejos.com/wp-content/uploads/2019/04/retro-deere.jpg', 'https://cgmrental.com.pe/wp-content/uploads/2019/06/20191108_091910.jpg', 'https://cgmrental.com.pe/wp-content/uploads/2019/06/20191108_091910.jpg', 'https://cgmrental.com.pe/wp-content/uploads/2019/06/20191108_091910.jpg'),
    new Maquinaria('Volqueta', 'Mercedes', 'afsdfsd', '2021CATEX', 'CAT123456', 'Volqueta 10 toneladas', 'Suramericana', '123456789', 'FCN014', 'https://http2.mlstatic.com/D_NQ_NP_917132-MCO42938236663_072020-O.jpg', 'https://http2.mlstatic.com/D_NQ_NP_913779-MCO42938263466_072020-O.jpg', 'https://http2.mlstatic.com/D_NQ_NP_917132-MCO42938236663_072020-O.jpg', 'https://http2.mlstatic.com/D_NQ_NP_913779-MCO42938263466_072020-O.jpg')
  ];
  
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

  constructor(private router: Router, private modal: NgbModal) { }
  
  ngOnInit(): void {
    let maquinaria1 = new Maquinaria(this.nombreEquipo, this.marca, this.serial, this.modeloReferencia, this.placaInventario, this.descripcion, this.aseguradora, this.numeroPoliza, this.placaVehiculo, this.foto1, this.foto2, this.foto3, this.foto4);
    this.maquinaria.push(maquinaria1);
    this.maquinaria.splice(this.maquinaria.length-1);
  }

  registrarEquipo(){
    
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size: 'lg'});
  }

  cerrarModal(){
    this.modal.dismissAll();
  }
  
}
