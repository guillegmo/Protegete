import { Component, OnInit } from '@angular/core';
import { Maquinaria } from './maquinaria';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  visible = false;
  texto = '1';  

  maquinaria: Maquinaria[] = [
    new Maquinaria('Retroexcavadora', 'Caterpilla', 'afsdfsd', '2021CATEX', 'CAT123456', 'Restroexcavadora todo terreno', 'N/A', 'N/A', 'N/A', 'https://cdn.shopify.com/s/files/1/1008/5164/products/IMG_2948_1000x1000.jpg?v=1537350506', 'https://image.made-in-china.com/202f0j10iQIRKUvzhFks/Used-Cat-420e-Backhoe-Loader-Cat-Backhoe-Loader-420e.jpg', 'https://cdn.shopify.com/s/files/1/1008/5164/products/IMG_2948_1000x1000.jpg?v=1537350506', 'https://i.machinio.com/medium/1c8d7zb/170014519.jpg'),
    new Maquinaria('Volqueta', 'Mercedes', 'afsdfsd', '2021CATEX', 'CAT123456', 'Volqueta 10 toneladas', 'Suramericana', '123456789', 'FCN014', 'https://http2.mlstatic.com/D_NQ_NP_673272-MCO42938261376_072020-O.webp', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvehiculo.mercadolibre.com.co%2FMCO-596141237-volqueta-8x4-mercedes-benz-arocs-no-incluye-volco-_JM&psig=AOvVaw1_MvQRVebOXuyxVx0hoYtp&ust=1633712812871000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiV6NLkuPMCFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvehiculo.mercadolibre.com.co%2FMCO-596141237-volqueta-8x4-mercedes-benz-arocs-no-incluye-volco-_JM&psig=AOvVaw1_MvQRVebOXuyxVx0hoYtp&ust=1633712812871000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiV6NLkuPMCFQAAAAAdAAAAABAN', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvehiculo.mercadolibre.com.co%2FMCO-596141237-volqueta-8x4-mercedes-benz-arocs-no-incluye-volco-_JM&psig=AOvVaw1_MvQRVebOXuyxVx0hoYtp&ust=1633712812871000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiV6NLkuPMCFQAAAAAdAAAAABAc')
  ];
  
  nombreEquipo = '';
  marca = '';
  serial = '';
  modeloReferencia = ''; 
  placaInventario = ''; 
  descripcion = '';
  aseguradora = '';
  numeroPoliza = '';
  placaVehiculo = '';
  foto1 = '';
  foto2 = '';
  foto3 = '';
  foto4 = '';

  constructor() { 
    
  }

  ngOnInit(): void {
   
  }
  
  crearEquipo(){
    let maquinaria1 = new Maquinaria(this.nombreEquipo, this.marca, this.serial, this.modeloReferencia, this.placaInventario, this.descripcion, this.aseguradora, this.numeroPoliza, this.placaVehiculo, this.foto1, this.foto2, this.foto3, this.foto4);
    this.maquinaria.push(maquinaria1);
  }

}
