import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/servicios/data.services';
import { ActividadPrincipal } from './actividadPrincipal';
import { ActividadSecundaria } from './actividadSecundaria';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  actividadPrincipal: any = [];

  actividadPrincipal1: any = [];

  actividadSecundaria: any = [];

  actividadSecundaria1: any = [];

  arrayActividadSecundaria: any =[];
  numActividadP = 0;
  select = this.actividadPrincipal[0];
  actividadPrincipalCadena = 'Actividad Principal';
  actividadSecundariaCadena = 'Actividad Secundaria';
  fechaInicioCadena = '';
  fechaFinCadena = '';
  validacion = false;

  constructor(private modal: NgbModal, private dataServices: DataServices) {
    
   }

  ngOnInit(): void {
    this.obtenerActividadPrincipales();
    this.obtenerActividadSecundarias();
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size: 'lg'});
  }

  openSM(contenido: any){
    this.modal.open(contenido,{size: 'sm'});
  }

  cerrarModal(){
    this.modal.dismissAll();
  }

  obtenerActividadPrincipales() {
    this.dataServices.cargarActidadPrincipales().subscribe(
      (res) => {
        this.actividadPrincipal = res;
        console.log(this.actividadPrincipal);
      },
      (error) => console.error(error)
    );
  }

  obtenerActividadPrincipal(){    
    let id = (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).value;
    if(id!=''){
      (document.getElementById('codigoActividadSecundaria') as HTMLInputElement).focus();
      this.dataServices.cargarActvidadPrincipal(parseInt(id)).subscribe(
        (res) => {
          this.actividadPrincipal1 = res;
          console.log(this.actividadPrincipal1);
          if(this.actividadPrincipal1==null) {
            alert('El codigo de la Actividad Principal no Existe');
            (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).focus();
            this.actividadPrincipal1 = [];
          }
        },
        (error) => console.error(error)
      );
    }
    if(id==''){
      alert('Debe de ingresar un codigo Valido');
    } 
  }

  crearActividadPrincipal() {
    let numero = this.actividadPrincipal.length + 1;
    let actividadPrincipal1 = new ActividadPrincipal(numero,(document.getElementById('actividadPrincipal') as HTMLInputElement).value);
    this.dataServices.crearActividadPrincipal(actividadPrincipal1).subscribe(
      (res) => {
        alert('Actividad creada con exito');
        this.obtenerActividadPrincipales();
      },
      (error) => console.error(error)
    );
    this.cerrarModal();
  }

  obtenerActividadSecundaria() {

    let id1 = (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).value + (document.getElementById('codigoActividadSecundaria') as HTMLInputElement).value;
    let id2 = (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).value;
    console.log(id1+" y "+id2);

    this.dataServices.cargarActividadSecundaria(parseInt(id1), parseInt(id2)).subscribe(
      (res) => {
        this.actividadSecundaria1 = res;
        console.log(this.actividadSecundaria1);
        if(this.actividadSecundaria1==null){
          alert('El codigo de la Actividad Secundaria no Existe');
          this.actividadSecundaria1 = [];
          this.validacion = true;
          (document.getElementById('botonCrearActividadSecundaria') as HTMLInputElement).focus();
        }
      },
      (error) => console.error(error)
    );
  }

  obtenerActividadSecundarias(){
    this.dataServices.cargarActidadSecundarias().subscribe(
      (res) => {
        this.actividadSecundaria = res;
        console.log(this.actividadSecundaria);
      },
      (error) => console.error(error)
    );
  }

  crearActividadSecundaria() {
      
    let numero = (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).value + (document.getElementById('codigoActividadSecundaria') as HTMLInputElement).value;
    let id = (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).value;
    let actividadSecundaria1 = new ActividadSecundaria(parseInt(numero), this.actividadSecundaria.nombreActividadPrincipal, (document.getElementById('nombreActividadSecundaria2') as HTMLInputElement).value, (document.getElementById('fechaInicio') as HTMLInputElement).value, (document.getElementById('fechaFin') as HTMLInputElement).value, parseInt(id));
    console.log(actividadSecundaria1);
    this.dataServices.crearActividadSecundaria(actividadSecundaria1).subscribe(
      (res) => {
        alert('Actividad creada con exito');
        this.obtenerActividadSecundarias();
        this.validacion = false;
        this.actividadPrincipal1 = [];
        this.actividadSecundaria1 = [];
        this.actividadPrincipalCadena = '';
        this.actividadSecundariaCadena = '';
        (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).focus();
      },
        (error) => console.error(error)
      );
    this.cerrarModal();
    
  }

  eliminarActvidadSecundaria(id: number) {
    this.dataServices.eliminarActvidadSecundaria(id).subscribe(
      (res) => {
        console.log(res);
        this.obtenerActividadSecundarias();
        alert('Actividad eliminada con Exito: ' + id);
      },
      (err) => console.log(err)
    );
  }

  arregloActividadSecundaria(arregloActividadSecundaria: any[]){

    let actividadSecundaria1 = new ActividadSecundaria(
      arregloActividadSecundaria[0],
      arregloActividadSecundaria[1],
      arregloActividadSecundaria[2],
      arregloActividadSecundaria[3],
      arregloActividadSecundaria[4],
      arregloActividadSecundaria[5],
    );
    this.actualizaActividadSecundaria(actividadSecundaria1);
  }
  
  actualizaActividadSecundaria(actividadSecundaria: ActividadSecundaria) {
    this.dataServices.actualizarActividadSecundaria(actividadSecundaria).subscribe(
      (res) => {
        console.log(res);
        this.obtenerActividadSecundarias();
        alert('Actividad Secundaria actualizada con exito');
        this.cerrarModal();
      },
      (err) => console.log(err)
    );
  }

}
