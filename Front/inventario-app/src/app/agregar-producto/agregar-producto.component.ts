import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto;

  constructor(){}

  ngOnInit(){
    this.producto = new Producto
  }

  agregarProducto(){
    console.log(this.producto);
    
  }

}
