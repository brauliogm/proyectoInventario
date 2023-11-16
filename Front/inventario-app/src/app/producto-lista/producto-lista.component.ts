import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(private productoService: ProductoService,
              private enrutador: Router){}

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

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarPoducto(id: number){
    this.productoService.eliminarProducto(id).subscribe(
      {
        next: (datos) => this.obtenerProductos(),
        error: (error) => console.log(error)
      }
    );
  }
}
