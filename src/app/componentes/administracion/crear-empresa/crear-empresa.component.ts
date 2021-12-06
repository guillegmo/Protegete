import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/servicios/data.services';
import { CrearEmpresa } from './crearEmpresa';
import { RepresentanteLegal } from './representanteLegal';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  tipoContribuyente = 'Tipo de Contribuyente';
  representanteL: any = [];
  crearEmpresas: any = [];
  crearEmpresa: any = [];
  numeroRepresentanteLegal: number;
  botonRepresentante: string;
  tipoContribuyenteCadena: string;
  tipoEmpresaCadena: string;
  nitCadena: string;
  nombre1Cadena: string;
  nombre2Cadena: string;
  apellido1Cadena: string;
  apellido2Cadena: string;
  nombreEmpresaCadena: string;
  direccionCadena: string;
  ciudadCadena: string;
  telefono1Cadena: string;
  telefono2Cadena: string;
  emailCadena: string;
  representanteLegalCadena: string;

  constructor(private modal: NgbModal, private dataServices: DataServices) { }  

  ngOnInit(): void {
    this.obtenerCrearEmpresas();
  }

  openLG(contenido: any) {
    this.modal.open(contenido,{size: 'lg'});
  }

  openXL(contenido: any) {
    let representanteLegal = (document.getElementById('#RepresentanteLegal') as HTMLInputElement).value;
    if(representanteLegal !=''){
      this.modal.open(contenido,{size: 'xl'});
      (document.getElementById('nombre1RepresentanteLegal') as HTMLInputElement).focus();
      this.obtenerRepresentanteLegal();
    }else{
      alert('Debe de ingresar el documento del representante legal');
      (document.getElementById('#RepresentanteLegal') as HTMLInputElement).focus();
    }    
  }

  openXL2(contenido: any, id: number) {
    this.modal.open(contenido,{size: 'xl'});
    this.obtenerCrearEmpresa(id);
  }

  openSM(contenido: any){
    this.modal.open(contenido,{size: 'sm'});
  }

  cerrarModal(){
    this.modal.dismissAll();
  }

  cerrarModalActualizarEmpresa(){
    this.modal.dismissAll();
    this.actualizarEmpresa();
  }

  agregarRepresentanteLegal(){
    let documentoRepresentanteLegal = parseInt((document.getElementById('numeroDocumentoRepresentanteLegal') as HTMLInputElement).value);
    let nombre1RepresentanteLegal = (document.getElementById('nombre1RepresentanteLegal') as HTMLInputElement).value;
    let nombre2RepresentanteLegal = (document.getElementById('nombre2RepresentanteLegal') as HTMLInputElement).value;
    let apellido1RepresentanteLegal = (document.getElementById('apellido1RepresentanteLegal') as HTMLInputElement).value;
    let apellido2RepresentanteLegal = (document.getElementById('apellido2RepresentanteLegal') as HTMLInputElement).value;
    let direccionRepresentanteLegal = (document.getElementById('direccionRepresentanteLegal') as HTMLInputElement).value;
    let telefono1RepresentanteLegal = (document.getElementById('telefono1RepresentanteLegal') as HTMLInputElement).value;
    let telefono2RepresentanteLegal = (document.getElementById('telefono2RepresentanteLegal') as HTMLInputElement).value;
    let emailRepresentanteLegal = (document.getElementById('emailRepresentanteLegal') as HTMLInputElement).value;
    let representanteLegal1 = new RepresentanteLegal( documentoRepresentanteLegal, nombre1RepresentanteLegal, nombre2RepresentanteLegal, apellido1RepresentanteLegal, apellido2RepresentanteLegal, direccionRepresentanteLegal, telefono1RepresentanteLegal, telefono2RepresentanteLegal, emailRepresentanteLegal);

    this.dataServices.crearRepresentanteLegal(representanteLegal1).subscribe(
      (res) => {
        alert('Representante Legal creado con exito'); 
        this.cerrarModal(); 
        (document.getElementById('botonCrearEmpresa') as HTMLInputElement).focus();
      },
      (error) => console.error(error)
    );
  }

  agregarCrearEmpresa(){
    let nit = parseInt((document.getElementById('nit') as HTMLInputElement).value);
    let tipoContribuyente = (document.getElementById('tipoContribuyente') as HTMLInputElement).value;
    let tipoEmpresa = (document.getElementById('tipoEmpresa') as HTMLInputElement).value;
    let nombre1 = '';
    let nombre2 = '';
    let apellido1 = '';
    let apellido2 = '';
    let nombreEmpresa = (document.getElementById('nombreEmpresa') as HTMLInputElement).value;
    let direccion = (document.getElementById('direccion') as HTMLInputElement).value;
    let ciudad = (document.getElementById('ciudad') as HTMLInputElement).value;
    let telefono1 = (document.getElementById('telefono1') as HTMLInputElement).value;
    let telefono2 = (document.getElementById('telefono2') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let representanteLegal =(document.getElementById('#RepresentanteLegal') as HTMLInputElement).value;
    
    if(tipoContribuyente =='Persona Natural'){
      nombre1 = (document.getElementById('nombre1') as HTMLInputElement).value;
      nombre2 = (document.getElementById('nombre2') as HTMLInputElement).value;
      apellido1 = (document.getElementById('apellido1') as HTMLInputElement).value;
      apellido2 = (document.getElementById('apellido2') as HTMLInputElement).value;
    }

    let crearEmpresa1 = new CrearEmpresa(nit, tipoContribuyente, tipoEmpresa, nombre1, nombre2, apellido1, apellido2, nombreEmpresa, direccion, ciudad, telefono1, telefono2, email, parseInt(representanteLegal));
    
    if(representanteLegal!=''){
      this.dataServices.crearCrearEmpresa(crearEmpresa1).subscribe(
        (res) => {
          alert('Empresa creada con exito'); 
          this.obtenerCrearEmpresas();   
        },
        (error) => console.error(error)
      );
    }
    if(representanteLegal==''){
      alert('Se debe Ingresar el Documento del Representante Legal');
      (document.getElementById('#RepresentanteLegal') as HTMLInputElement).focus();
    }
    
  }

  obtenerCrearEmpresas(){
    this.dataServices.cargarCrearEmpresas().subscribe(
      (res) => {
        this.crearEmpresas = res;
        console.log(this.crearEmpresas);
      },
      (error) => console.error(error)
    );
  }

  obtenerCrearEmpresa(id: number){
    this.dataServices.cargarCrearEmpresa(id).subscribe(
      (res) => {
        this.crearEmpresa = res;
        console.log(this.crearEmpresa);
        this.tipoContribuyenteCadena = this.crearEmpresa.tipoContribuyente;
        this.tipoEmpresaCadena = this.crearEmpresa.tipoEmpresa;
        this.nitCadena = this.crearEmpresa.nit;
        this.nombre1Cadena = this.crearEmpresa.nombre1;
        this.nombre2Cadena = this.crearEmpresa.nombre2;
        this.apellido1Cadena = this.crearEmpresa.apellido1;
        this.apellido2Cadena = this.crearEmpresa.apellido2;
        this.nombreEmpresaCadena = this.crearEmpresa.nombreEmpresa;
        this.direccionCadena = this.crearEmpresa.direccion;
        this.ciudadCadena = this.crearEmpresa.ciudad;
        this.telefono1Cadena = this.crearEmpresa.telefono1;
        this.telefono2Cadena = this.crearEmpresa.telefono2;
        this.emailCadena = this.crearEmpresa.email;
        this.representanteLegalCadena = this.crearEmpresa.id_RepresentanteLegal;
        console.log(this.crearEmpresa.nombre1);
      },
      (error) => console.error(error)
    );
  }

  obtenerRepresentanteLegal(){
    let id = parseInt((document.getElementById('#RepresentanteLegal') as HTMLInputElement).value);
    this.dataServices.cargarRepresentanteLegal(id).subscribe(
      (res) => {
        this.representanteL = res;
        console.log(this.representanteL);
        if(this.representanteL == null){
          this.limpiarModal();
          this.botonRepresentante = 'crear';
          console.log(this.botonRepresentante);
        }
        else{
          this.botonRepresentante = 'modificar';
          console.log(this.botonRepresentante);
        }
      },
      (error) => console.error(error)
    );
  }

  limpiarModal(){
    this.representanteL = [];
  }

  eliminarEmpresa(id: number) {
    this.dataServices.eliminarCrearEmpresa(id).subscribe(
      (res) => {
        console.log(res);
        this.obtenerCrearEmpresas();
        alert('Codigo Eliminado con Exito: ' + id);
      },
      (err) => console.log(err)
    );
  }

  actualizarRepresentanteLegal(){
    let documentoRepresentanteLegal = parseInt((document.getElementById('numeroDocumentoRepresentanteLegal') as HTMLInputElement).value);
    let nombre1RepresentanteLegal = (document.getElementById('nombre1RepresentanteLegal') as HTMLInputElement).value;
    let nombre2RepresentanteLegal = (document.getElementById('nombre2RepresentanteLegal') as HTMLInputElement).value;
    let apellido1RepresentanteLegal = (document.getElementById('apellido1RepresentanteLegal') as HTMLInputElement).value;
    let apellido2RepresentanteLegal = (document.getElementById('apellido2RepresentanteLegal') as HTMLInputElement).value;
    let direccionRepresentanteLegal = (document.getElementById('direccionRepresentanteLegal') as HTMLInputElement).value;
    let telefono1RepresentanteLegal = (document.getElementById('telefono1RepresentanteLegal') as HTMLInputElement).value;
    let telefono2RepresentanteLegal = (document.getElementById('telefono2RepresentanteLegal') as HTMLInputElement).value;
    let emailRepresentanteLegal = (document.getElementById('emailRepresentanteLegal') as HTMLInputElement).value;

    let representanteLegal = new RepresentanteLegal(documentoRepresentanteLegal, nombre1RepresentanteLegal, nombre2RepresentanteLegal, apellido1RepresentanteLegal, apellido2RepresentanteLegal, direccionRepresentanteLegal, telefono1RepresentanteLegal, telefono2RepresentanteLegal, emailRepresentanteLegal);
    this.dataServices.actualizarRepresentanteLegal(representanteLegal).subscribe(
      (res) => {
        console.log(res);
        this.obtenerRepresentanteLegal();
        this.cerrarModal();
        (document.getElementById('botonCrearEmpresa') as HTMLInputElement).focus();
      },
      (err) => console.log(err)
    );
  }

  actualizarEmpresa(){

    let nit = parseInt((document.getElementById('nitModal') as HTMLInputElement).value);
    let tipoContribuyente = (document.getElementById('tipoContribuyenteModal') as HTMLInputElement).value;
    let tipoEmpresa = (document.getElementById('tipoEmpresaModal') as HTMLInputElement).value;
    let nombre1 = (document.getElementById('nombre1Modal') as HTMLInputElement).value;
    let nombre2 = (document.getElementById('nombre2Modal') as HTMLInputElement).value;
    let apellido1 = (document.getElementById('apellido1Modal') as HTMLInputElement).value;
    let apellido2 = (document.getElementById('apellido2Modal') as HTMLInputElement).value;
    let nombreEmpresa = (document.getElementById('nombreEmpresaModal') as HTMLInputElement).value;
    let direccion = (document.getElementById('direccionModal') as HTMLInputElement).value;
    let ciudad = (document.getElementById('ciudadModal') as HTMLInputElement).value;
    let telefono1 = (document.getElementById('telefono1Modal') as HTMLInputElement).value;
    let telefono2 = (document.getElementById('telefono2Modal') as HTMLInputElement).value;
    let email = (document.getElementById('emailModal') as HTMLInputElement).value;
    let idRepresentanteLegal = parseInt((document.getElementById('representanteLegalModal') as HTMLInputElement).value);

    let actualizarEmpresa = new CrearEmpresa(nit, tipoContribuyente, tipoEmpresa, nombre1, nombre2, apellido1, apellido2, nombreEmpresa, direccion, ciudad, telefono1, telefono2, email, idRepresentanteLegal);

    this.dataServices.actualizarCrearEmpresa(actualizarEmpresa).subscribe(
      res => {
        console.log(res);
        this.obtenerCrearEmpresas();
        alert('Empresa actualizada con Exito');
      },
      err => console.log(err)
    );
    this.cerrarModal();
  }

}
