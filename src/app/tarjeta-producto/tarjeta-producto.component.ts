import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {

   nombreProducto: string = "producto";
   precioProducto: number = 99999999;
   mensaje: string = 'aqui el gran mensaje';

   saludo2(){
    this.mensaje='Hola este es el saludito';
   }
}
