import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from "./saludo/saludo.component";
import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, TarjetaProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nrojlla';
}
