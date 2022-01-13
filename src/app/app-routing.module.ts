import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './componentes/nomina/crear-empleado/crear-empleado.component';
import { CrearEmpresaComponent } from './componentes/administracion/crear-empresa/crear-empresa.component';
import { CrearEquipoComponent } from './componentes/maquinariaEquipo/crear-equipo/crear-equipo.component';
import { CrearUsuarioComponent } from './componentes/administracion/crear-usuario/crear-usuario.component';
import { EditarEliminarEmpleadoComponent } from './componentes/nomina/editar-eliminar-empleado/editar-eliminar-empleado.component';
import { EditarEliminarEquipoComponent } from './componentes/maquinariaEquipo/editar-eliminar-equipo/editar-eliminar-equipo.component';
import { InformeClimaComponent } from './componentes/clima/informe-clima/informe-clima.component';
import { InformeMaquinariaEquipoComponent } from './componentes/maquinariaEquipo/informe-maquinaria-equipo/informe-maquinaria-equipo.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistroAsistenciaComponent } from './componentes/nomina/registro-asistencia/registro-asistencia.component';
import { RegistroBitacoraComponent } from './componentes/registroConsultasEjecucion/registro-bitacora/registro-bitacora.component';
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
import { RiesgosLaboralesComponent } from './componentes/nomina/riesgos-laborales/riesgos-laborales.component';
import { CajaCompensacionComponent } from './componentes/nomina/caja-compensacion/caja-compensacion.component';
import { InformeEmpleadoComponent } from './componentes/nomina/informe-empleado/informe-empleado.component';
import { InformefondoPensionesComponent } from './componentes/nomina/informefondo-pensiones/informefondo-pensiones.component';
import { InformefondoSaludComponent } from './componentes/nomina/informefondo-salud/informefondo-salud.component';
import { InformeRiesgosLaboralesComponent } from './componentes/nomina/informe-riesgos-laborales/informe-riesgos-laborales.component';
import { InformeCajaCompensacionComponent } from './componentes/nomina/informe-caja-compensacion/informe-caja-compensacion.component';
import { FondoSaludComponent } from './componentes/nomina/fondo-salud/fondo-salud.component';
import { ComprasComponent } from './componentes/almacen/compras/compras.component';
import { ControlHerramientaComponent } from './componentes/almacen/control-herramienta/control-herramienta.component';
import { TrasladosComponent } from './componentes/almacen/traslados/traslados.component';
import { DevolucionesAveriasComponent } from './componentes/almacen/devoluciones-averias/devoluciones-averias.component';
import { DevolucionesComprasComponent } from './componentes/almacen/devoluciones-compras/devoluciones-compras.component';
import { EntregaDotacionComponent } from './componentes/almacen/entrega-dotacion/entrega-dotacion.component';
import { CrearProveedorComponent } from './componentes/almacen/crear-proveedor/crear-proveedor.component';
import { InformeActividadesComponent } from './componentes/registroConsultasEjecucion/informe-actividades/informe-actividades.component';
import { InformeAsistenciaComponent } from './componentes/registroConsultasEjecucion/informe-asistencia/informe-asistencia.component';
import { InformeMaquinariaComponent } from './componentes/registroConsultasEjecucion/informe-maquinaria/informe-maquinaria.component';
import { MemoriaCalculoComponent } from './componentes/registroConsultasEjecucion/memoria-calculo/memoria-calculo.component';
import { ConsultaAvanceObraComponent } from './componentes/registroConsultasEjecucion/consulta-avance-obra/consulta-avance-obra.component';
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
import { CrearBitacoraComponent } from './componentes/registroConsultasEjecucion/crear-bitacora/crear-bitacora.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'nomina/crearempleado',component: CrearEmpleadoComponent},
  {path:'crearequipo', component: CrearEquipoComponent},
  {path:'nomina/editareliminarempleado', component: EditarEliminarEmpleadoComponent},
  {path:'editareliminarequipo', component: EditarEliminarEquipoComponent},
  {path:'registroyconsultasdeejecucion/bitacora/registroasistencia', component: RegistroAsistenciaComponent},
  {path:'registroyconsultasdeejecucion/bitacora', component: RegistroBitacoraComponent},
  {path:'informemaquinariaequipo', component: InformeMaquinariaEquipoComponent},
  {path:'informeclima', component: InformeClimaComponent},
  {path:'administrar/crearempresa', component: CrearEmpresaComponent},
  {path:'administrar/crearusuarios', component: CrearUsuarioComponent},
  {path:'maquinariaequipo/maquinariaequipo', component: MaquinariaEquipoComponent},
  {path:'planeacion/inventarios', component: InventarioComponent},
  {path:'planeacion/cronograma', component: CronogramaComponent},
  {path:'planeacion/presupuesto', component: PresupuestoComponent},
  {path:'precontractual/estudiotecnico', component: EstudioTecnicoComponent},
  {path:'precontractual/estudioadministrativo', component: EstudioAdministrativoComponent},
  {path:'precontractual/estudioambiental', component: EstudioAmbientalComponent},
  {path:'precontractual/estudiojuridico', component: EstudioJuridicoComponent},
  {path:'precontractual/estudioFinanciero', component: EstudioFinancieroComponent},
  {path:'correspondencia/recibida', component: RecibidaComponent},
  {path:'correspondencia/despachada', component: DespachadaComponent},
  {path:'correspondencia/informes', component: InformesComponent},
  {path:'nomina/fondopensiones', component: FondoPensionesComponent},
  {path:'nomina/fondosalud', component: FondoSaludComponent},
  {path:'nomina/riesgoslaborales', component: RiesgosLaboralesComponent},
  {path:'nomina/cajacompensacion', component: CajaCompensacionComponent},
  {path:'nomina/informeempleados', component: InformeEmpleadoComponent},
  {path:'nomina/informefondopensiones', component: InformefondoPensionesComponent},
  {path:'nomina/informefondosalud', component: InformefondoSaludComponent},
  {path:'nomina/informeriesgoslaborales', component: InformeRiesgosLaboralesComponent},
  {path:'nomina/informecajacompensacion', component: InformeCajaCompensacionComponent},
  {path:'almacen/compras', component: ComprasComponent},
  {path:'almacen/traslados', component: TrasladosComponent},
  {path:'almacen/devolucionesaverias', component: DevolucionesAveriasComponent},
  {path:'almacen/devolucionescompras', component: DevolucionesComprasComponent},
  {path:'almacen/entregadotacion', component: EntregaDotacionComponent},
  {path:'almacen/controlherramienta', component: ControlHerramientaComponent},
  {path:'almacen/crearproveedor', component: CrearProveedorComponent},
  {path:'registroyconsultasdeejecucion/informeactividades', component: InformeActividadesComponent},
  {path:'registroyconsultasdeejecucion/informeasistencia', component: InformeAsistenciaComponent},
  {path:'registroyconsultasdeejecucion/informemaquinaria', component: InformeMaquinariaComponent},
  {path:'registroyconsultasdeejecucion/memoriacalculo', component: MemoriaCalculoComponent},
  {path:'registroyconsultasdeejecucion/consultaavanceobra', component: ConsultaAvanceObraComponent},
  {path:'contabilidad/crearplancuentas', component: CrearPlanCuentasComponent},
  {path:'contabilidad/creardocumentos', component: CrearDocumentosComponent},
  {path:'contabilidad/registrarasiento', component: RegistrarAsientoComponent},
  {path:'contabilidad/consultacuenta', component: ConsultaCuentaComponent},
  {path:'contabilidad/consultadocumento', component: ConsultaDocumentoComponent},
  {path:'contabilidad/consultatercero', component: ConsultaTerceroComponent},
  {path:'contabilidad/balancegeneral', component: BalanceGeneralComponent},
  {path:'contabilidad/balancedetallado', component: BalanceDetalladoComponent},
  {path:'administracion/aperturacontrato', component: AperturaContratoComponent},
  {path:'administracion/actainicio', component: ActaInicioComponent},
  {path:'administracion/actatecnicainicial', component: ActaTecnicaInicialComponent},
  {path:'precontractual/interventoria', component: InterventoriaComponent},
  {path:'registroyconsultasdeejecucion/pruebaslaboratorio', component: PruebasLaboratorioComponent},
  {path:'registroyConsultasdeejecucion/crearBitacora', component: CrearBitacoraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
