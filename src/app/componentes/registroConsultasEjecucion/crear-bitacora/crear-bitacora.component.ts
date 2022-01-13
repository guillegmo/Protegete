import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-bitacora',
  templateUrl: './crear-bitacora.component.html',
  styleUrls: ['./crear-bitacora.component.css']
})
export class CrearBitacoraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  linkBitacora(){
    this.router.navigate(['registroyconsultasdeejecucion/bitacora']);
  }

}
