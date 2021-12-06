import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/servicios/data.services';
import { Usuario } from './usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  mensaje = false;

  usuarios: any = [];

  usuario: Usuario = {
    idUsuario: 0,
    nit: '',
    nombreEmpresa: '',
    direccion: '',
    telefono: '',
    email: '',
    password: '',
    tipoUsuario: 'Tipo de Usuario',
  };

  constructor(private dataServices: DataServices, private modal: NgbModal) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  crearUsuario() {  
    this.dataServices.crearUsuario(this.usuario).subscribe(
      (res) => {
        console.log('Usuario creado con exito');
        this.limpiarFormulario();
        this.mensaje = true;
      },
      (error) => console.error(error)
    );
  }

  limpiarFormulario() {
      this.usuario = {
      idUsuario: 0,
      nit: '',
      nombreEmpresa: '',
      direccion: '',
      telefono: '',
      email: '',
      password: '',
      tipoUsuario: 'Tipo de Usuario',
    };
  }

  obtenerUsuarios(){
    this.dataServices.cargarUsuarios()
    .subscribe(
      res => {
        this.usuarios = res;
        console.log(this.usuarios);
      },
      error => console.error(error)
    );
  }

  eliminarUsuario(id: number) {
    this.dataServices.eliminarUsuario(id).subscribe(
      res => {
        console.log(res);
        this.obtenerUsuarios();
        alert('Usuario Eliminado Exitosamente: '+id);
      },
      err => console.log(err)
    );
  }

  actualizarEmpleado(usuario: Usuario) {
    this.dataServices.actualizarUsuario(usuario).subscribe(
      res => {
        console.log(res);
        this.obtenerUsuarios();
      },
      err => console.log(err)
    );
    this.cerrarModal();
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

  arreglo(array: any[]){
    alert("Usuario Actualizado");
    let usuarioActualizar = new Usuario(array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7]);
    this.actualizarEmpleado(usuarioActualizar);
  }


}
