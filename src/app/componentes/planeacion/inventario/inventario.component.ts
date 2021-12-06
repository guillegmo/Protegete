import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/servicios/data.services';
import { Grupo } from './grupo';
import { GrupoLinea } from './grupoLinea';
import { Iva } from './iva';
import { Linea } from './linea';
import { Producto } from './producto';
import { TipoProducto } from './tipoProducto';
import { UnidadMedida } from './unidadMedida';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  codigoLinea = '';
  codigoGrupo = '';
  codigoProducto = '';
  lineas: any = [];
  linea: any = [];
  grupos: any = [];
  grupo: any = [];
  tipoProductos: any = [];
  iva: any = [];
  unidadMedida: any = [];
  producto: any = [];
  productos: any = [];
  activar = false;
  codigoLinea1 = '';
  afirmativo = 'Si';
  boton = true;
  tituloBoton = 'Crear Producto';
  editar = false;

  constructor(private modal: NgbModal, private dataServices: DataServices) {}

  ngOnInit(): void {
    this.obtenerLineas();
    this.obtenerGrupos();
    this.obtenerTipoProducto();
    this.obtenerIva();
    this.obtenerUnidadMedida();
    this.obtenerProductos();
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

  crearLinea(id: string) {
    let nombreLinea1 = (
      document.getElementById('nombreLinea1') as HTMLInputElement
    ).value;
    if (nombreLinea1 != '') {
      (document.getElementById(id) as HTMLInputElement).focus();
      let linea1 = new Linea(
        parseInt(
          (document.getElementById('codigoLinea1') as HTMLInputElement).value
        ),
        (document.getElementById('nombreLinea1') as HTMLInputElement).value
      );
      this.dataServices.crearLinea(linea1).subscribe(
        (res) => {
          alert('Linea creada con exito');
          this.obtenerLineas();
        },
        (error) => console.error(error)
      );
    }
    if (nombreLinea1 == '') {
      alert('Debe de Ingresar nombre de la linea a Crear');
    }
  }

  obtenerLineas() {
    this.dataServices.cargarLineas().subscribe(
      (res) => {
        this.lineas = res;
        console.log(this.lineas);
      },
      (error) => console.error(error)
    );
  }

  obtenerLinea(id: string, id2: string) {
    (document.getElementById(id2) as HTMLInputElement).focus();
    this.dataServices.cargarLinea(parseInt(id)).subscribe(
      (res) => {
        this.linea = res;
        console.log(this.linea);
        if (res == null) {
          this.linea = [];
          alert('Codigo no Existe');
        }
      },
      (error) => console.error(error)
    );
    if ((document.getElementById('codigoLinea1') as HTMLInputElement).value == '') {
      this.codigoLinea = '' + (this.lineas.length);
    }
  }

  crearGrupo() {
    let nombreGrupo = (document.getElementById('nombreGrupo1') as HTMLInputElement).value;
    if(nombreGrupo!='') {
      let concatenar =
        (document.getElementById('codigoLinea1') as HTMLInputElement).value +
        (document.getElementById('codigoGrupo1') as HTMLInputElement).value;
  
      let grupo1 = new Grupo(
        parseInt(concatenar),
        (document.getElementById('nombreGrupo1') as HTMLInputElement).value,
        parseInt(
          (document.getElementById('codigoLinea1') as HTMLInputElement).value
        )
      );
      this.dataServices.crearGrupo(grupo1).subscribe(
        (res) => {
          alert('Grupo creado con exito');
          this.obtenerGrupos();
        },
        (error) => console.error(error)
      );
    }
    if(this.codigoGrupo==''){
      (document.getElementById('codigoGrupo1') as HTMLInputElement).focus();
    }
    if(nombreGrupo==''){
      alert('Debe de Ingresar nombre del Grupo a Crear');
    }
  }

  obtenerGrupos() {
    this.dataServices.cargarGrupos().subscribe(
      (res) => {
        this.grupos = res;
        console.log(this.grupos);
      },
      (error) => console.error(error)
    );    
  }

  obtenerGrupo(id1: string, id: string) {
    (document.getElementById(id) as HTMLInputElement).focus();
    let id2 =
      (document.getElementById('codigoLinea1') as HTMLInputElement).value +
      (document.getElementById('codigoGrupo1') as HTMLInputElement).value;
    console.log(parseInt(id2) + ' y ' + parseInt(id1));
    this.dataServices.cargarGrupo(parseInt(id2), parseInt(id1)).subscribe(
      (res) => {
        this.grupo = res;
        console.log(this.grupo);
        if(res != null){
          this.editar = true;
        }
        if (res == null) {
          this.grupo = [];
          alert('Grupo no Existe');
          this.editar = false;
        }
      },
      (error) => console.error(error)
    );
    if((document.getElementById('codigoGrupo1') as HTMLInputElement).value=='') {
      (document.getElementById('codigoGrupo1') as HTMLInputElement).focus();
    }
  }

  eliminarGrupo(id: number) {
    this.dataServices.eliminarGrupo(id).subscribe(
      (res) => {
        console.log(res);
        this.obtenerGrupos();
        alert('Codigo Eliminado con Exito: ' + id);
      },
      (err) => console.log(err)
    );
  }

  actualizarLinea(linea: Linea) {
    this.dataServices.actualizarLinea(linea).subscribe(
      (res) => {
        console.log(res);
        this.obtenerGrupos();
      },
      (err) => console.log(err)
    );
  }

  actualizarGrupo(grupo: Grupo) {
    this.dataServices.actualizarGrupo(grupo).subscribe(
      (res) => {
        console.log(res);
        this.obtenerGrupos();
      },
      (err) => console.log(err)
    );
  }

  arreglo(linea: any[], grupo: any[]) {
    if (
      (document.getElementById('nombreGrupo1') as HTMLInputElement).value != ''
    ) {
      alert('Codigo Actualizado');
    }
    let lineaActualizar = new Linea(linea[0], linea[1]);
    let grupoActualizar = new Grupo(grupo[0], grupo[1], grupo[2]);

    this.actualizarGrupo(grupoActualizar);
    this.actualizarLinea(lineaActualizar);
  }

  obtenerTipoProducto() {
    this.dataServices.cargarTipoProductos().subscribe(
      (res) => {
        this.tipoProductos = res;
        console.log(this.tipoProductos);
      },
      (error) => console.error(error)
    );
  }

  crearTipoProducto() {
    let numero = 0;
    let tipoProducto1 = new TipoProducto(
      numero,
      (document.getElementById('tipoProducto') as HTMLInputElement).value,
      this.afirmativo
    );
    this.dataServices.crearTipoProducto(tipoProducto1).subscribe(
      (res) => {
        alert('Tipo de Producto creado con exito');
        this.obtenerTipoProducto();
      },
      (error) => console.error(error)
    );
    this.cerrarModal();
  }

  obtenerIva() {
    this.dataServices.cargarIvas().subscribe(
      (res) => {
        this.iva = res;
        console.log(this.iva);
      },
      (error) => console.error(error)
    );
  }

  crearIva() {
    let numero = 0;
    let iva1 = new Iva(
      numero,
      (document.getElementById('nombreiva') as HTMLInputElement).value,
      parseInt(
        (document.getElementById('porcentajeiva') as HTMLInputElement).value
      )
    );
    this.dataServices.crearIva(iva1).subscribe(
      (res) => {
        alert('Iva creado con exito');
        this.obtenerIva();
      },
      (error) => console.error(error)
    );
    this.cerrarModal();
  }

  obtenerUnidadMedida() {
    this.dataServices.cargarUnidadMedidas().subscribe(
      (res) => {
        this.unidadMedida = res;
        console.log(this.unidadMedida);
      },
      (error) => console.error(error)
    );
  }

  crearUnidadMedida() {
    let numero = 0;
    let unidadMedida1 = new UnidadMedida(
      numero,
      (document.getElementById('nombreUnidadMedida') as HTMLInputElement).value,
      (document.getElementById('siglaUnidadMedida') as HTMLInputElement).value
    );
    this.dataServices.crearUnidadMedida(unidadMedida1).subscribe(
      (res) => {
        alert('Unidad de Medida creada con exito');
        this.obtenerUnidadMedida();
      },
      (error) => console.error(error)
    );
    this.cerrarModal();
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

  crearProducto() {

    let nombreProducto = (document.getElementById('nombreProducto') as HTMLInputElement).value;
    if(nombreProducto!='') {
      let concatenar =
      (document.getElementById('codigoLinea1') as HTMLInputElement).value +
      (document.getElementById('codigoGrupo1') as HTMLInputElement).value +
      (document.getElementById('codigoProducto1') as HTMLInputElement).value;
      let idGrupo =
      (document.getElementById('codigoLinea1') as HTMLInputElement).value +
      (document.getElementById('codigoGrupo1') as HTMLInputElement).value;
      let producto1 = new Producto(
      parseInt(concatenar),
      (document.getElementById('nombreProducto') as HTMLInputElement).value,
      (document.getElementById('codigoBarras') as HTMLInputElement).value,
      (document.getElementById('tipoProducto') as HTMLInputElement).value,
      (document.getElementById('tipoIva') as HTMLInputElement).value,
      (document.getElementById('unidadMedida') as HTMLInputElement).value,
      parseInt(
        (document.getElementById('costoCompra') as HTMLInputElement).value
      ),
      parseInt(
        (document.getElementById('stockMinimo') as HTMLInputElement).value
      ),
      parseInt(
        (document.getElementById('diasAnticipacion') as HTMLInputElement).value
      ),
      parseInt(idGrupo)
      );
      console.log(producto1);
      this.dataServices.crearProducto(producto1).subscribe(
        (res) => {
          alert('Producto creado con exito');
          this.obtenerProductos();
          this.producto = [];
          this.limpiarFormulario();
        },
        (error) => console.error(error)
      );
      this.cerrarModal();
    }
    if(nombreProducto==''){
      alert('Debe de Ingresar nombre del Producto a Crear');
      (document.getElementById('nombreProducto') as HTMLInputElement).focus();
    }
    
  }

  obtenerProducto(id1: string, id: string) {

    (document.getElementById(id) as HTMLInputElement).focus();

    let id2 =
      (document.getElementById('codigoLinea1') as HTMLInputElement).value +
      (document.getElementById('codigoGrupo1') as HTMLInputElement).value +
      (document.getElementById('codigoProducto1') as HTMLInputElement).value;
    id1 =
      (document.getElementById('codigoLinea1') as HTMLInputElement).value +
      (document.getElementById('codigoGrupo1') as HTMLInputElement).value;
    console.log(parseInt(id2) + ' y ' + parseInt(id1));
    this.dataServices.cargarProducto(parseInt(id2), parseInt(id1)).subscribe(
      (res) => {
        this.producto = res;
        console.log(this.producto);
        this.boton = false;
        this.tituloBoton = 'Editar Producto';
        if (res == null) {
          this.producto = [];
          alert('Producto no Existe');
          this.boton = true;
          this.tituloBoton = 'Crear Producto';
        }
      },
      (error) => console.error(error)
    );
  }

  arregloProducto(producto: any[]) {
    if (
      (document.getElementById('nombreProducto') as HTMLInputElement).value !=
      ''
    ) {
      alert('Producto Actualizado');
      this.producto = [];
      this.limpiarFormulario();
    }

    let productoActualizar = new Producto(
      producto[0],
      producto[1],
      producto[2],
      producto[3],
      producto[4],
      producto[5],
      producto[6],
      producto[7],
      producto[8],
      producto[9]
    );
    this.actualizarProducto(productoActualizar);
  }

  actualizarProducto(producto: Producto) {
    this.dataServices.actualizarProducto(producto).subscribe(
      (res) => {
        console.log(res);
        this.obtenerProductos();
      },
      (err) => console.log(err)
    );
  }

  limpiarFormulario() {
    this.codigoLinea = '';
    this.codigoGrupo = '';
    this.codigoProducto = '';
    this.linea = [];
    this.grupo = [];
    this.producto = [];
    this.boton = true;
    this.tituloBoton = 'Crear Producto';
  }

  saltarInput(id: string) {
    (document.getElementById(id) as HTMLInputElement).focus();
  }
}
