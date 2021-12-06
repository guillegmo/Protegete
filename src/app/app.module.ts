import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistroAsistenciaComponent } from './componentes/nomina/registro-asistencia/registro-asistencia.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menusContenedor/menu/menu.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CrearEmpleadoComponent } from './componentes/nomina/crear-empleado/crear-empleado.component';
import { CrearEquipoComponent } from './componentes/maquinariaEquipo/crear-equipo/crear-equipo.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { contenedorComponent } from './componentes/menusContenedor/contenedor/contenedor.component';
import { RegistroBitacoraComponent } from './componentes/registroConsultasEjecucion/registro-bitacora/registro-bitacora.component';
import { InformeMaquinariaEquipoComponent } from './componentes/maquinariaEquipo/informe-maquinaria-equipo/informe-maquinaria-equipo.component';
import { InformeClimaComponent } from './componentes/clima/informe-clima/informe-clima.component';
import { FormsModule } from '@angular/forms';
import { DataServices } from './servicios/data.services';
import { HttpClientModule } from '@angular/common/http';
import { EditarEliminarEmpleadoComponent } from './componentes/nomina/editar-eliminar-empleado/editar-eliminar-empleado.component';
import { EditarEliminarEquipoComponent } from './componentes/maquinariaEquipo/editar-eliminar-equipo/editar-eliminar-equipo.component';
import { LoginComponent } from './componentes/menusContenedor/login/login.component';
import { MenuSupervisorComponent } from './componentes/menusContenedor/menu-supervisor/menu-supervisor.component';
import { CrearEmpresaComponent } from './componentes/administracion/crear-empresa/crear-empresa.component';
import { CrearUsuarioComponent } from './componentes/administracion/crear-usuario/crear-usuario.component';
import { MaquinariaEquipoComponent } from './componentes/maquinariaEquipo/maquinaria-equipo/maquinaria-equipo.component';
import { InventarioComponent } from './componentes/planeacion/inventario/inventario.component';
import { CronogramaComponent } from './componentes/planeacion/cronograma/cronograma.component';
import { PresupuestoComponent } from './componentes/planeacion/presupuesto/presupuesto.component';
import { EstudioTecnicoComponent } from './componentes/precontractual/estudio-tecnico/estudio-tecnico.component';
import { EstudioAdministrativoComponent } from './componentes/precontractual/estudio-administrativo/estudio-administrativo.component';
import { EstudioAmbientalComponent } from './componentes/precontractual/estudio-ambiental/estudio-ambiental.component';
import { EstudioJuridicoComponent } from './componentes/precontractual/estudio-juridico/estudio-juridico.component';
import { EstudioFinancieroComponent } from './componentes/precontractual/estudio-financiero/estudio-financiero.component';
import { RecibidaComponent } from './componentes/correspondencia/recibida/recibida.component';
import { DespachadaComponent } from './componentes/correspondencia/despachada/despachada.component';
import { InformesComponent } from './componentes/correspondencia/informes/informes.component';
import { FondoPensionesComponent } from './componentes/nomina/fondo-pensiones/fondo-pensiones.component';
import { FondoSaludComponent } from './componentes/nomina/fondo-salud/fondo-salud.component';
import { CajaCompensacionComponent } from './componentes/nomina/caja-compensacion/caja-compensacion.component';
import { InformeEmpleadoComponent } from './componentes/nomina/informe-empleado/informe-empleado.component';
import { InformefondoPensionesComponent } from './componentes/nomina/informefondo-pensiones/informefondo-pensiones.component';
import { InformefondoSaludComponent } from './componentes/nomina/informefondo-salud/informefondo-salud.component';
import { InformeRiesgosLaboralesComponent } from './componentes/nomina/informe-riesgos-laborales/informe-riesgos-laborales.component';
import { InformeCajaCompensacionComponent } from './componentes/nomina/informe-caja-compensacion/informe-caja-compensacion.component';
import { RiesgosLaboralesComponent } from './componentes/nomina/riesgos-laborales/riesgos-laborales.component';
import { ComprasComponent } from './componentes/almacen/compras/compras.component';
import { TrasladosComponent } from './componentes/almacen/traslados/traslados.component';
import { DevolucionesAveriasComponent } from './componentes/almacen/devoluciones-averias/devoluciones-averias.component';
import { DevolucionesComprasComponent } from './componentes/almacen/devoluciones-compras/devoluciones-compras.component';
import { EntregaDotacionComponent } from './componentes/almacen/entrega-dotacion/entrega-dotacion.component';
import { ControlHerramientaComponent } from './componentes/almacen/control-herramienta/control-herramienta.component';
import { CrearProveedorComponent } from './componentes/almacen/crear-proveedor/crear-proveedor.component';
import { InformeAsistenciaComponent } from './componentes/registroConsultasEjecucion/informe-asistencia/informe-asistencia.component';
import { InformeMaquinariaComponent } from './componentes/registroConsultasEjecucion/informe-maquinaria/informe-maquinaria.component';
import { MemoriaCalculoComponent } from './componentes/registroConsultasEjecucion/memoria-calculo/memoria-calculo.component';
import { ConsultaAvanceObraComponent } from './componentes/registroConsultasEjecucion/consulta-avance-obra/consulta-avance-obra.component';
import { InformeActividadesComponent } from './componentes/registroConsultasEjecucion/informe-actividades/informe-actividades.component';
import { CrearPlanCuentasComponent } from './componentes/contabilidad/crear-plan-cuentas/crear-plan-cuentas.component';
import { CrearDocumentosComponent } from './componentes/contabilidad/crear-documentos/crear-documentos.component';
import { RegistrarAsientoComponent } from './componentes/contabilidad/registrar-asiento/registrar-asiento.component';
import { ConsultaCuentaComponent } from './componentes/contabilidad/consulta-cuenta/consulta-cuenta.component';
import { ConsultaDocumentoComponent } from './componentes/contabilidad/consulta-documento/consulta-documento.component';
import { ConsultaTerceroComponent } from './componentes/contabilidad/consulta-tercero/consulta-tercero.component';
import { BalanceGeneralComponent } from './componentes/contabilidad/balance-general/balance-general.component';
import { BalanceDetalladoComponent } from './componentes/contabilidad/balance-detallado/balance-detallado.component';
import { AperturaContratoComponent } from './componentes/administracion/apertura-contrato/apertura-contrato.component';
import { ActaInicioComponent } from './componentes/administracion/acta-inicio/acta-inicio.component';
import { ActaTecnicaInicialComponent } from './componentes/administracion/acta-tecnica-inicial/acta-tecnica-inicial.component';
import { InterventoriaComponent } from './componentes/precontractual/interventoria/interventoria.component';
import { PruebasLaboratorioComponent } from './componentes/registroConsultasEjecucion/pruebas-laboratorio/pruebas-laboratorio.component';
import { InformeBitacoraComponent } from './componentes/registroConsultasEjecucion/informe-bitacora/informe-bitacora.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroAsistenciaComponent,
    MenuComponent,
    PrincipalComponent,
    CrearEmpleadoComponent,
    CrearEquipoComponent,
    contenedorComponent,
    RegistroBitacoraComponent,
    InformeMaquinariaEquipoComponent,
    InformeClimaComponent,
    EditarEliminarEmpleadoComponent,
    EditarEliminarEquipoComponent,
    LoginComponent,
    MenuSupervisorComponent,
    CrearEmpresaComponent,
    CrearUsuarioComponent,
    MaquinariaEquipoComponent,
    InventarioComponent,
    CronogramaComponent,
    PresupuestoComponent,
    EstudioTecnicoComponent,
    EstudioAdministrativoComponent,
    EstudioAmbientalComponent,
    EstudioJuridicoComponent,
    EstudioFinancieroComponent,
    RecibidaComponent,
    DespachadaComponent,
    InformesComponent,
    FondoPensionesComponent,
    FondoSaludComponent,
    CajaCompensacionComponent,
    InformeEmpleadoComponent,
    InformefondoPensionesComponent,
    InformefondoSaludComponent,
    InformeRiesgosLaboralesComponent,
    InformeCajaCompensacionComponent,
    RiesgosLaboralesComponent,
    ComprasComponent,
    TrasladosComponent,
    DevolucionesAveriasComponent,
    DevolucionesComprasComponent,
    EntregaDotacionComponent,
    ControlHerramientaComponent,
    CrearProveedorComponent,
    InformeAsistenciaComponent,
    InformeMaquinariaComponent,
    MemoriaCalculoComponent,
    ConsultaAvanceObraComponent,
    InformeActividadesComponent,
    CrearPlanCuentasComponent,
    CrearDocumentosComponent,
    RegistrarAsientoComponent,
    ConsultaCuentaComponent,
    ConsultaDocumentoComponent,
    ConsultaTerceroComponent,
    BalanceGeneralComponent,
    BalanceDetalladoComponent,
    AperturaContratoComponent,
    ActaInicioComponent,
    ActaTecnicaInicialComponent,
    InterventoriaComponent,
    PruebasLaboratorioComponent,
    InformeBitacoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
