import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/servicios/data.services';
import { Actividades } from '../cronograma/actividades';
import { GrupoLinea } from '../inventario/grupoLinea';
import { Materiales } from './materiales';
import { Presupuesto } from './presupuesto';
import { PresupuestoDetallado } from './presupuestoDetallado';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  actividadPrincipal = [];

  actividadSecundaria: any = [];
  productos: any = [];
  producto: any = [];
  materiales: any = [];
  presupuestos: any = [];
  presupuesto: any = [];
  numeroActividad = 0;

  arrayActividadSecundaria: any =[];
  numActividadP = 0;
  arrayActividad: Actividades[];
  select = this.actividadPrincipal[0];
  actividadPrincipalCadena = '';
  actividadSecundariaCadena = '';
  fechaInicioCadena = '';
  fechaFinCadena = '';
  boton = '+';
  activo = true;
  botonEliminar = false;

  presupuestoDetallado: PresupuestoDetallado[] = [];
  presupuestoGeneral: PresupuestoDetallado[] = [];

  materialesCadena = 'Seleccione Materiales';
  cantidad = 0;
  unidadMedida = '';
  valorUnitario: number;
  valorTotal: number;
  valorTotalGeneral = 0;
  valorTotalPresupuesto = 0;

  constructor(private modal: NgbModal, private dataServices: DataServices) {

   }

  ngOnInit(): void {
    this.obtenerActividadSecundarias();
    this.obtenerProductos();
    this.obtenerMaterial();
    this.obtenerPresupuestos();
  }  

  openLG(contenido: any, id: number) {
    this.modal.open(contenido,{size: 'lg'});
    this.numeroActividad = id;
    this.obtenerMaterial();
    this.obtenerPresupuesto(id);
  }

  openSM(contenido: any){
    this.modal.open(contenido,{size: 'sm'});
  }

  cerrarModal(){
    this.modal.dismissAll();
  }

  obtenerActividadSecundarias(){
    this.dataServices.cargarActividadSecundariasAll().subscribe(
      (res) => {
        this.actividadSecundaria = res;
        console.log(this.actividadSecundaria);
      },
      (error) => console.error(error)
    );
  }

  obtenerProductos() {
    this.dataServices.cargarProductos().subscribe(
      (res) => {
        this.productos = res;
        console.log(this.productos);
      },
      (error) => console.error(error)
    );
  }

  obtenerProducto(){
    let ArrayCodigo = ((document.getElementById('codigoMaterial') as HTMLInputElement).value).split('-');
    let id1 = ArrayCodigo[0];
    let id2 = id1.substr(0,2);
    this.dataServices.cargarProducto(parseInt(id1), parseInt(id2)).subscribe(
      (res) => {
        this.producto = res;
        console.log(this.producto);
      },
      (error) => console.error(error)
    );
  }

  obtenerMaterial(){
    this.dataServices.cargarMaterial(this.numeroActividad).subscribe(
      (res) => {
        this.materiales = res;
        console.log(this.materiales);
        this.valorTotalGeneral=0;
        for(let i = 0; i < this.materiales.length; i++) {
          this.valorTotalGeneral += parseInt(this.materiales[i].valorTotalMaterial);          
        }
        console.log(this.valorTotalGeneral);
      },
      (error) => console.error(error)
    );
  }

  agregarMaterial(actividadSecundaria: number) {
    let numero = 0;
    let material1 = new Materiales(numero, this.producto.nombreProducto, this.cantidad.toString(), this.producto.unidadMedida, parseInt(this.producto.costoCompra), (this.cantidad*parseInt(this.producto.costoCompra)).toString(), actividadSecundaria);
    console.log(this.producto.costoCompra);
    this.dataServices.crearMaterial(material1).subscribe(
      (res) => {
        console.log('Material creado con exito');
        this.obtenerMaterial();
        this.limpiarFormulario();    
      },
      (error) => console.error(error)
    );
  }

  eliminarMaterial(id: number) {
    this.dataServices.eliminarMaterial(id).subscribe(
      (res) => {
        console.log(res);
        this.obtenerMaterial();
        console.log('Material Eliminado con Exito: ' + id);
      },
      (err) => console.log(err)
    );
  }

  limpiarFormulario(){
    this.materialesCadena = 'Seleccione Materiales';
    this.cantidad = 0;
  }

  obtenerPresupuestos(){
    this.dataServices.cargarPresupuestos().subscribe(
      (res) => {
        this.presupuestos = res;
        console.log(this.presupuestos);
        this.valorTotalPresupuesto=0;
        for(let i = 0; i < this.presupuestos.length; i++) {
          this.valorTotalPresupuesto += parseInt(this.presupuestos[i].valorTotalPresupuesto);          
        }
      },
      (error) => console.error(error)
    );
  }

  obtenerPresupuesto(idActvidadSecundaria: number){
    this.dataServices.cargarPresupuesto(idActvidadSecundaria).subscribe(
      (res) => {
        this.presupuesto = res;
        console.log(this.presupuesto);
        if(this.presupuesto != null){
          this.activo = false;
          this.botonEliminar = true;
        }
        if(this.presupuesto == null){
          this.activo = true;
          this.botonEliminar = false;
        }
      },
      (error) => console.error(error)
    );
  }

  agregarPresupuesto(idActividadPrincipal: number, nombreActividadPrincipal: string, idActividadSecundaria: number, nombreActividadSecundaria: string, valorTotalPresupuesto: number, presupuestoG: string) {
    let numero = 0;
    let presupuesto1 = new Presupuesto(numero, idActividadPrincipal, nombreActividadPrincipal, idActividadSecundaria, nombreActividadSecundaria, valorTotalPresupuesto.toString(), presupuestoG);
    console.log(presupuestoG);
    this.dataServices.crearPresupuesto(presupuesto1).subscribe(
      (res) => {
        alert('Presupuesto creado con exito');  
        this.cerrarModal();
        this. obtenerPresupuestos();
      },
      (error) => console.error(error)
    );
  }

  eliminarPresupuesto(id: number) {
    this.dataServices.eliminarPresupuesto(id).subscribe(
      (res) => {
        console.log(res);
        this.obtenerPresupuestos();
        console.log('Presupuesto Eliminado con Exito: ' + id);
      },
      (err) => console.log(err)
    );
  }

}
