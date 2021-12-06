export class Producto{
    constructor(
        public idProducto: number,
        public nombreProducto: string,
        public codigoBarras: string,
        public tipoProducto: string,
        public tipoIva: string,
        public unidadMedida: string,
        public costoCompra: number,
        public stockMinimo: number,
        public diasAnticipacion: number,
        public id_Grupo: number,
    ){}
}