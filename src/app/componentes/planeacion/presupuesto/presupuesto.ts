export class Presupuesto{
    constructor(
        public idPresupuesto: number,
        public id_ActividadPrincipal: number,
        public nombreActividadPrincipal: string,
        public id_ActividadSecundaria: number,
        public nombreActividadSecundaria: string,
        public valorTotalPresupuesto: string,
        public presupuestoG: string,
    ){}
}