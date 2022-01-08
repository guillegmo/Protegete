import { Component, OnInit } from '@angular/core';
import { Actividad } from './actividad';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Actividades } from '../../planeacion/cronograma/actividades';
import { DataServices } from 'src/app/servicios/data.services';

@Component({
  selector: 'app-registro-bitacora',
  templateUrl: './registro-bitacora.component.html',
  styleUrls: ['./registro-bitacora.component.css']
})
export class RegistroBitacoraComponent implements OnInit {

  crearFormulario = false;
  arrayNotas = ["Dia con lluvia se inicia con labores una hora despues",
                "Escabadora se encuentra averiada",
                "averia en superficie a trabajar"];
  nota = '';

  actividades: any =[];

  dias = [] = [1,2,3,4,5,6,7,8,9,0,11,12];

  actividadPrincipal: any = [];

  actividadSecundaria: any = [];

  arrayActividadSecundaria: any =[];
  numActividadP = 0;
  arrayActividad: Actividades[];
  select = 'Actividad Principal';
  nombreActividadCadena = 'Actividad Secundaria';

  nombreActividad: string;
  largo: string;
  ancho: string;
  alto: string;
  area: string;
  volumen: string;

  nitEmpresa = '900.777.888';
  nombreEmpresa = 'Constructora Prueba S.A.S';
  fechaDia = new Date();
  numeroContrato = 'PC-20220106';
  objetoContrato = 'EL  CONTRATISTA  se  obliga  para  con  EL CONTRATANTE  a  ejecutar  por  el  sistema  de  PRECIOS  UNITARIOS  FIJOS  SIN FÓRMULA  DE  REAJUSTE  Y  PLAZO  FIJO  las  obras  civiles  para  la  construcción  de  la cimentación  y  estructura  del  Proyecto Constructora Prueba SAS  Las  obras se  adelantarán  en  el  inmueble  ubicado  en  la  Vereda  la  Leona  Municipio  de  Cajamarca Tolima  Coordenadas  423 01 0N    75 30 34 0 4 383611  75.509444  de  acuerdo con  las  normas  técnicas  vigentes  y  los  documentos  que  hacen  parte  integral  del  contrato enunciados  en  la  cláusula  segunda  cumpliendo  con  los  más  altos  estándares  de  calidad El  detalle  de  los  trabajos  a  ejecutar  con  las  cantidades  precios  unitarios  y  totales  están contenidos  en  el  Anexo  No  1  del  presente  contrato  que  para  efectos  legales  hace  parte integral  del  mismo';
  usuario: string = 'prueba';

  constructor(private modal: NgbModal, private router: Router, private dataServices: DataServices) {  
    
  }


  ngOnInit(): void {
    this.obtenerActividadPrincipales();
  }

  crearActividad(){
    let actividad1 = new Actividad(this.nombreActividadCadena,this.largo,this.ancho,this.alto,this.area,this.volumen);
    this.actividades.push(actividad1);
    this.limpiarFormulario();
    this.modal.dismissAll();
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size: 'lg'});
  }

  openSM(contenido: any){
    this.modal.open(contenido,{size: 'sm'});
  }

  linkAsistencia(){
    this.router.navigate(['registroyconsultasdeejecucion/bitacora/registroasistencia']);
  }

  linkMaquinariaEquipo(){
    this.router.navigate(['maquinariaequipo/maquinariaequipo']);
  }

  limpiarFormulario(){
    this.nombreActividad = '';
    this.largo = '';
    this.ancho = '';
    this.alto = '';
    this.area = '';
    this.volumen = '';
    this.modal.dismissAll();
    }

    crearNota(){
      this.arrayNotas.push(this.nota);
      this.nota = '';
    }
    
    obtenerActividadPrincipales() {
      this.dataServices.cargarActidadPrincipales().subscribe(
        (res) => {
          this.actividadPrincipal = res;
          console.log(this.actividadPrincipal);
          this.obtenerActividadSecundarias();
        },
        (error) => console.error(error)
      );
    }

    obtenerActividadSecundarias() {
      if(this.select == "Actividad Principal"){
        this.actividadSecundaria = [];
      }
      let array = this.select.split(' ');
      let id1 = parseInt(array[0]);
      this.dataServices.cargarActividadSecundarias(id1).subscribe(
        (res) => {
          this.actividadSecundaria = res;
          console.log(this.actividadSecundaria);          
        },
        (error) => console.error(error)
      );
    }

}
