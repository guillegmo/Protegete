import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apertura-contrato',
  templateUrl: './apertura-contrato.component.html',
  styleUrls: ['./apertura-contrato.component.css']
})
export class AperturaContratoComponent implements OnInit {

  select = 'Tipo de Contrato';
  opcion = false;
  ubicacion = 'Vda las palmas KM 5';
  dpto ='Quindio';
  ciudad ='Pijao';
  pais ='Colombia';
  valorContrato = '$315.521.251.00';
  identificacionContrato = 'AD52421BJF';
  duracion = '24 Meses';
  fechaInicio = '2021-11-01';
  fechaFin = '2023-10-31';
  confirmarBotonGuardar = '';

  constructor(private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modal.dismissAll();
  }

  openSM(contenido: any){
    this.modal.open(contenido,{size: 'sm'});
    this.linkPrincipal();
  }

  linkPrincipal(){
    this.router.navigate(['/principal']);
  }

}
