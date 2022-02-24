import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from 'src/app/servicios/data.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  visible = false;
  log = true;
  usuario = '';
  password = '';
  mensaje = '';
  

  constructor(private router: Router, private dataService: DataServices) { };

  ngOnInit(): void {
    
  }

  login(){ 
    if(this.usuario==='supervisor' && this.password==='1'){
      this.visible=true;
      this.log=false;
      this.mensaje = '';
      this.router.navigate(['/principal']);      
    }else{
      this.mensaje = 'Usuario o Contraseña Incorrectos'      
    }
    if(this.usuario==='interventor' && this.password==='2'){
      this.visible=true;
      this.log=false;
      this.mensaje = '';
      this.router.navigate(['/principal']);
    }else{
      this.mensaje = 'Usuario o Contraseña Incorrectos'
    }
    if(this.usuario==='contratista' && this.password==='3'){
      this.visible=true;
      this.log=false;
      this.mensaje = '';
      this.router.navigate(['/principal']);
    }else{
      this.mensaje = 'Usuario o Contraseña Incorrectos'     
    }
  }
  
}
