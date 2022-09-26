import { AST } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre="El formulario se habilitara en 5 segundos";
  textPlaceHolder="¿Cual de estos 3 es tu dibujo favorito?";
  title = 'Mi primer App ANGULAR';
  texto='evento event blinding'
  texto2:string=''
  deshabilitado=true;
  constructor(){
    setInterval(()=>this.nombre='Creado por Diego Andres Peñuela, Formulario habilitado',5000)
    setInterval(()=>this.deshabilitado=false,5000)
  }
  public ArregloTarjetas:| Tarjeta[]=[]

  ngOnInit(): void {

    this.ArregloTarjetas=[
  {titulo:'Imagen 1', subtitulo:'Mano',image:"https://dibujoypintura.net/wp-content/uploads/2018/02/Como-Dibujar-Manos.jpg"},
  {titulo:'Imagen 2', subtitulo:'Pie',image:"https://i.pinimg.com/236x/17/bd/ae/17bdae746d23d32c3a816964cc869b0c.jpg"},
  {titulo:'Imagen 3', subtitulo:'Torzo',image:"https://www.ttamayo.com/wp-content/uploads/2021/03/474e5aac973b8879c3463caebfec8174.jpg"}


    ]
  }
cambiarTexto():void{
  this.texto="Su opinion es importante para nosotros";
}
}
