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

  actividades: Actividad[]=[
    new Actividad('1.1 CERRAMIENTO TELA FIB. TEJIDA H= 2,10 MTS','2','2','2','2','2'),
    new Actividad('1.2 CAMPAMENTO TABLA 9 M2','3','3','3','3','3')
  ];

  dias = [] = [1,2,3,4,5,6,7,8,9,0,11,12];

  actividadPrincipal = [
    'PRELIMINARES',
    'ESTRUCTURA',
    'MAMPOSTERIA',
  ];

  actividadSecundaria: Actividades[] = [
    new Actividades('1', 'PRELIMINARES','CERRAMIENTO TELA FIB. TEJIDA H= 2,10 MTS','11/10/2021', '22/10/2021'),
    new Actividades('1', 'PRELIMINARES','CAMPAMENTO TABLA 9 M2','11/10/2021', '22/10/2021'),
    new Actividades('1', 'PRELIMINARES','LOCALIZACION REPLANTEO OBRA ARQUITECTONICA','11/10/2021', '22/10/2021'),
    new Actividades('1', 'PRELIMINARES','DESCAPOTE MANUAL MAS RETIRO H= 0,20 MTS','11/10/2021', '22/10/2021'),
    new Actividades('1', 'PRELIMINARES','RETIRO DE ESCOMBROS A MAQUINA 10 KM','11/10/2021', '22/10/2021'),
    new Actividades('1', 'PRELIMINARES','RELLENO TIERRA + NIVELACION + ACARREO','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','EXCAVACION TIERRA A MANO','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','VIGA CIMIENTO ENLACE H= 20-40 CM','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','ACERO DE REFUERZO FLEJADO 60000 PSI 420 Mpa','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','ZAPATA CONCRETO 3000 PSI INC FORMALETA','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','MALLA ELECTROSOLDADA','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','COLUMNA CONCRETO 3000 PSI','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','CONTRAPISO CONCRETO E= 10 CM 2500 PSI','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','VIGA CONCR. AMARRE MURO 10 - 12 X 20 CM','11/10/2021', '22/10/2021'),
    new Actividades('2', 'ESTRUCTURA','CINTA CONFINAMIENTO MURO','11/10/2021', '22/10/2021'),
    new Actividades('3', 'MAMPOSTERIA','MURO LAD. SOGA LIMPIO REVITADO (2C)','11/10/2021', '22/10/2021'),
    new Actividades('3', 'MAMPOSTERIA','REPELLO MURO 1:3','11/10/2021', '22/10/2021'),
  ];

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
  numeroContrato = 'PC-20211002';
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
        },
        (error) => console.error(error)
      );
    }

    obtenerActividadSecundaria() {

      let id1 = (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).value + (document.getElementById('codigoActividadSecundaria') as HTMLInputElement).value;
      let id2 = (document.getElementById('codigoActividadPrincipal') as HTMLInputElement).value;
      console.log(id1+" y "+id2);  
      this.dataServices.cargarActividadSecundaria(parseInt(id1), parseInt(id2)).subscribe(
        (res) => {
          this.actividadSecundaria = res;
          console.log(this.actividadSecundaria);
          if(this.actividadSecundaria == null){
            alert('El codigo de la Actividad Secundaria no Existe');
            this.actividadSecundaria = [];
            (document.getElementById('botonCrearActividadSecundaria') as HTMLInputElement).focus();
          }
        },
        (error) => console.error(error)
      );
    }

}
