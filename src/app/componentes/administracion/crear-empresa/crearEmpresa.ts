export class CrearEmpresa{
    constructor(
        public nit: number,
        public tipoContribuyente: string,
        public tipoEmpresa: string,
        public nombre1: string,
        public nombre2: string,
        public apellido1: string,
        public apellido2: string,
        public nombreEmpresa: string,
        public direccion: string,
        public ciudad: string,
        public telefono1: string,
        public telefono2: string,
        public email: string,
        public id_RepresentanteLegal: number,
    ){}
}