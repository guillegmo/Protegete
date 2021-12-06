export class PresupuestoDetallado{

    constructor(
        public id: number, 
        public actividadPrincipal: string, 
        public actividadSecundaria: string,
        public inventario: string,
        public cantidad: number,
        public unidadMedida: string,
        public valorUnitario: number,
        public valorTotal: number,
        ){}
}