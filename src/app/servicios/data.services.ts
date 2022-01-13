import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "../componentes/administracion/crear-usuario/usuario";
import { Empleado } from "../componentes/nomina/crear-empleado/empleado";
import { Grupo } from "../componentes/planeacion/inventario/grupo";
import { Iva } from "../componentes/planeacion/inventario/iva";
import { Linea } from "../componentes/planeacion/inventario/linea";
import { Producto } from "../componentes/planeacion/inventario/producto";
import { TipoProducto } from "../componentes/planeacion/inventario/tipoProducto";
import { UnidadMedida } from "../componentes/planeacion/inventario/unidadMedida";
import {ActividadPrincipal} from "../componentes/planeacion/cronograma/actividadPrincipal";
import { ActividadSecundaria } from "../componentes/planeacion/cronograma/actividadSecundaria";
import { Materiales } from "../componentes/planeacion/presupuesto/materiales";
import { Presupuesto } from "../componentes/planeacion/presupuesto/presupuesto";
import { RepresentanteLegal } from "../componentes/administracion/crear-empresa/representanteLegal";
import { CrearEmpresa } from "../componentes/administracion/crear-empresa/crearEmpresa";
import { Maquinaria } from "../componentes/maquinariaEquipo/crear-equipo/maquinaria";

@Injectable()
export class DataServices{    

    myAppUrl: string;
    myApiEmpleados: string;
    myApiUsuarios: string;
    myApiLinea: string;
    myApiGrupo: string;
    myApiTipoProducto: string;
    myApiIva: string;
    myApiUnidadMedida: string;
    myApiProducto: string;
    myApiActividadPrincipal: string;
    myApiActividadSecundaria: string;
    myApiMateriales: string;
    myApiPresupuesto: string;
    myApiRepresentanteLegal: string;
    myApiCrearEmpresa: string;
    myApiEquipo: string;

    constructor(private httpClient: HttpClient){

        this.myAppUrl = environment.endPoint;
        this.myApiEmpleados = '/api/Empleados';
        this.myApiUsuarios = '/api/Usuarios';
        this.myApiLinea = '/api/Linea';
        this.myApiGrupo = '/api/Grupo';
        this.myApiTipoProducto = '/api/TipoProducto';
        this.myApiIva = '/api/Iva';
        this.myApiUnidadMedida = '/api/UnidadMedida';
        this.myApiProducto = '/api/Producto';
        this.myApiActividadPrincipal = '/api/ActividadPrincipal';
        this.myApiActividadSecundaria = '/api/ActividadSecundaria';
        this.myApiMateriales = '/api/Materiales';
        this.myApiPresupuesto = '/api/Presupuesto';
        this.myApiRepresentanteLegal = '/api/RepresentanteLegal';
        this.myApiCrearEmpresa = '/api/CrearEmpresa';
        this.myApiEquipo = '/api/Equipo';
    }
    
    //Consultas tabla empleado

    cargarEmpleados(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiEmpleados}`);
    }

    cargarEmpleado(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiEmpleados}/${id}`);
    } 

    eliminarEmpleado(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiEmpleados}/${id}`);
    }

    crearEmpleado(empleado: Empleado): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiEmpleados}`, empleado);
    }

    actualizarEmpleado(empleado: Empleado): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiEmpleados}`, empleado);
    }

    //Consultas tabla usuario

    cargarUsuarios(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiUsuarios}`);
    }

    cargarUsuario(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiUsuarios}/${id}`);
    } 

    eliminarUsuario(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiUsuarios}/${id}`);
    }

    crearUsuario(usuario: Usuario): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiUsuarios}`, usuario);
    }

    actualizarUsuario(usuario: Usuario): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiUsuarios}`, usuario);
    }

    //Inventario
    //Consultas tabla Linea
    
    cargarLineas(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiLinea}`);
    }

    cargarLinea(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiLinea}/${id}`);
    } 

    eliminarLinea(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiLinea}/${id}`);
    }

    crearLinea(linea: Linea): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiLinea}`, linea);
    }

    actualizarLinea(linea: Linea): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiLinea}`, linea);
    }

    //Consulta tabla Grupo para
    
    cargarGrupos(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiGrupo}`);
    }

    cargarGrupo(id1: number, id2: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiGrupo}/${id1},${id2}`);
    } 

    eliminarGrupo(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiGrupo}/${id}`);
    }

    crearGrupo(grupo: Grupo): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiGrupo}`, grupo);
    }

    actualizarGrupo(grupo: Grupo): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiGrupo}`, grupo);
    }

    //Consulta tabla tipoProducto

    cargarTipoProductos(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiTipoProducto}`);
    }

    cargarTipoProducto(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiTipoProducto}/${id}`);
    } 

    eliminarTipoProducto(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiTipoProducto}/${id}`);
    }

    crearTipoProducto(tipoProducto: TipoProducto): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiTipoProducto}`, tipoProducto);
    }

    actualizarTipoProducto(tipoProducto: TipoProducto): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiTipoProducto}`, tipoProducto);
    }

    //Consultas tabla iva

    cargarIvas(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiIva}`);
    }

    cargarIva(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiIva}/${id}`);
    } 

    eliminarIva(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiIva}/${id}`);
    }

    crearIva(iva: Iva): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiIva}`, iva);
    }

    actualizarIva(iva: Iva): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiIva}`, iva);
    }

    //Consultas tabla unidadMedida

    cargarUnidadMedidas(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiUnidadMedida}`);
    }

    cargarUnidadMedida(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiUnidadMedida}/${id}`);
    } 

    eliminarUnidadMedida(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiUnidadMedida}/${id}`);
    }

    crearUnidadMedida(unidadMedida: UnidadMedida): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiUnidadMedida}`, unidadMedida);
    }

    actualizarUnidadMedida(unidadMedida: UnidadMedida): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiUnidadMedida}`, unidadMedida);
    }

    //Consultas tabla producto

    cargarProductos(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiProducto}`);
    }

    cargarProducto(id1: number, id2: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiProducto}/${id1},${id2}`);
    } 

    eliminarProducto(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiProducto}/${id}`);
    }

    crearProducto(producto: Producto): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiProducto}`, producto);
    }

    actualizarProducto(producto: Producto): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiProducto}`, producto);
    }
    
    //Consultas tabla actividadPrincipal

    cargarActidadPrincipales(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiActividadPrincipal}`);
    }

    cargarActvidadPrincipal(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiActividadPrincipal}/${id}`);
    } 

    eliminarActvidadPrincipal(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiActividadPrincipal}/${id}`);
    }

    crearActividadPrincipal(actividadPrincipal: ActividadPrincipal): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiActividadPrincipal}`, actividadPrincipal);
    }

    actualizarActividadPrincipal(actividadPrincipal: ActividadPrincipal): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiActividadPrincipal}`, actividadPrincipal);
    }

    //Consultas tabla actividadSecundaria

    cargarActividadSecundariasAll(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiActividadSecundaria}`);
    }

    cargarActividadSecundarias(id1: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiActividadSecundaria}/${id1}`);
    }

    cargarActividadSecundaria(id1: number, id2: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiActividadSecundaria}/${id1},${id2}`);
    } 

    eliminarActvidadSecundaria(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiActividadSecundaria}/${id}`);
    }

    crearActividadSecundaria(actividadSecundaria: ActividadSecundaria): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiActividadSecundaria}`, actividadSecundaria);
    }

    actualizarActividadSecundaria(actividadSecundaria: ActividadSecundaria): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiActividadSecundaria}`, actividadSecundaria);
    }

     //Consultas tabla materiales

     cargarMateriales(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiMateriales}`);
    }

    cargarMaterial(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiMateriales}/${id}`);
    } 

    eliminarMaterial(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiMateriales}/${id}`);
    }

    crearMaterial(materiales: Materiales): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiMateriales}`, materiales);
    }

    actualizarMaterial(materiales: Materiales): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiMateriales}`, materiales);
    }

    //Consultas tabla presupuesto

    cargarPresupuestos(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiPresupuesto}`);
    }

    cargarPresupuesto(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiPresupuesto}/${id}`);
    } 

    eliminarPresupuesto(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiPresupuesto}/${id}`);
    }

    crearPresupuesto(presupuesto: Presupuesto): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiPresupuesto}`, presupuesto);
    }

    actualizarPresupuesto(presupuesto: Presupuesto): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiPresupuesto}`, presupuesto);
    }

    //constructor tabla representanteLegal

    cargarRepresentanteLegals(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiRepresentanteLegal}`);
    }

    cargarRepresentanteLegal(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiRepresentanteLegal}/${id}`);
    } 

    eliminarRepresentanteLegal(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiRepresentanteLegal}/${id}`);
    }

    crearRepresentanteLegal(representanteLegal: RepresentanteLegal): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiRepresentanteLegal}`, representanteLegal);
    }

    actualizarRepresentanteLegal(representanteLegal: RepresentanteLegal): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiRepresentanteLegal}`, representanteLegal);
    }

    //Consultas tabla crearEmpresa

    cargarCrearEmpresas(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiCrearEmpresa}`);
    }

    cargarCrearEmpresa(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiCrearEmpresa}/${id}`);
    } 

    eliminarCrearEmpresa(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiCrearEmpresa}/${id}`);
    }

    crearCrearEmpresa(crearEmpresa: CrearEmpresa): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiCrearEmpresa}`, crearEmpresa);
    }

    actualizarCrearEmpresa(crearEmpresa: CrearEmpresa): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiCrearEmpresa}`, crearEmpresa);
    }

    //Consultas tabla crearEmpresa

    cargarEquipos(): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiEquipo}`);
    }

    cargarEquipo(id: number): Observable<any>{
        return this.httpClient.get(`${this.myAppUrl+this.myApiEquipo}/${id}`);
    } 

    eliminarEquipo(id: number): Observable<any>{
        return this.httpClient.delete(`${this.myAppUrl+this.myApiEquipo}/${id}`);
    }

    crearEquipo(maquinaria: Maquinaria): Observable<any>{
        return this.httpClient.post(`${this.myAppUrl+this.myApiEquipo}`, maquinaria);
    }

    actualizarEquipo(maquinaria: Maquinaria): Observable<any>{
        return this.httpClient.put(`${this.myAppUrl+this.myApiCrearEmpresa}`, maquinaria);
    }

}
