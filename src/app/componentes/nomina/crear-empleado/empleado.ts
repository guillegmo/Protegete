export class Empleado{
        
        constructor(
                
                public idEmpleado: string,
                public nombre1: string,
                public nombre2: string,
                public apellido1: string,
                public apellido2: string,
                public direccion: string,
                public ciudadResidencia: string,
                public telefono: string,
                public email: string,
                public EPS: string,
                public ARL: string,
                public fondoPension: string,
                public fondoCesantias: string,
                public cajaCompensacion: string,
                public cargo: string,
                public profesion: string,
                public salario: string,
                public fechaIngreso?: string,
        ){}

             
}