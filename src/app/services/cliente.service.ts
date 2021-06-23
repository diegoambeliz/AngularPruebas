import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente, Grupo } from '../models/cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor(
    private _http: HttpClient
  ) {
    this.clientes = [];
    
    for(let i = 1; i <= 1; i++)
    {
      this.clientes.push({
        id: i,
        nombre: "Carlos",
        telefono: JSON.stringify((Math.floor(Math.random() * (99999999 - 10000000) + 1))),
        idGrupo: (Math.floor(Math.random() * (4 - 1) + 1)),
      })
    }

    this.grupos = [
      {
        id: 1,
        nombre: "Sin definir"
      },
      {
        id: 2,
        nombre: "Activo"
      },
      {
        id: 3,
        nombre: "Inactivo"
      },
      {
        id: 4,
        nombre: "Deudor"
      }
    ]
  }

  public crearCliente(cliente: Cliente)
  {
    cliente.id = this.clientes.length + 1;
    this.clientes.push(cliente);
  }

  public obtenerClientes(): Observable<any>
  {
    return of(this.clientes);
  }

  public obtenerClientesJson(): Observable<any>
  {
    return this._http.get<Cliente[]>('/assets/clientes.json');
  }

  public obtenerClientePorId(id: number)
  {
    let cliente: Cliente = {
      id: 0,
      nombre: '',
      telefono: '',
      idGrupo: 0
    };

    this.clientes.forEach(el => {
      if(el.id == id) cliente = el;
    });

    return cliente;
  }

  public actualizarCliente(cliente: Cliente)
  {
  }

  public eliminarCliente(id: number)
  {

  }

  public obtenerPorGrupo(idGrupo: number)
  {
    let clientes: Cliente[] = [];

    this.clientes.forEach(el => {
      if(el.idGrupo == idGrupo) clientes.push(el);
    });

    return clientes;

  }
  
  public obtenerGrupos()
  {
    return this.grupos;
  }
}
