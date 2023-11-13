import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(private productoService: ProductoService){}

  ngOnInit(){
    //Cargar los productos
    this.obtenerProductos();
  }

  private obtenerProductos(){
    //Consumir los datos del observable (suscribirnos)
    this.productoService.obtenerProductosLista().subscribe(
      (datos => {
        this.productos = datos;
      })
    );
  }
}
