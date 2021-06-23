import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private proveedores: Proveedor[];

  constructor() {
    this.proveedores = [];
    
    for(let i = 1; i <= 1; i++)
    {
      this.proveedores.push({
        id: i,
        nombre: "Marcos",
        telefono: JSON.stringify((Math.floor(Math.random() * (99999999 - 10000000) + 1))),
        email:"marcos@gmail.com",
        activo: true
      })
    }
  }

  public crearProveedor(proveedor: Proveedor)
  {
    proveedor.id = this.proveedores.length + 1;
    this.proveedores.push(proveedor);
  }

  public obtenerProveedores(): Observable<any>
  {
    return of(this.proveedores);
  }
}
