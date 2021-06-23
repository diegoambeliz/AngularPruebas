import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { InfoInput } from '../shared/form/form.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['id', 'nombre', 'telefono'];
  public dataSource!: MatTableDataSource<Cliente>;
  public clickedRows = new Set<Cliente>();
  public infoInputsCliente: InfoInput[];
  public selectedCliente!: Cliente;

  @ViewChild(MatTable) table!: MatTable<Cliente>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private clienteService: ClienteService
  ) {
    this.dataSource = new MatTableDataSource();

    this.infoInputsCliente = [
      {
        id: "nombre",
        name: "nombre",
        placeholder: "Seleccione un nombre",
        title: "Nombre",
        formControlName: "nombre"
      },
      {
        id: "telefono",
        name: "telefono",
        placeholder: "Seleccione un telefono",
        title: "Telefono",
        formControlName: "telefono"
      }
    ]
  }

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerJson();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public obtenerClientes() {
    this.clienteService.obtenerClientes().subscribe(
      res => {
        this.dataSource.data = res;
      },
      err => {
        alert("Error");
      }
    );
  }

  public agregarClienteRandom() {
    let cliente: Cliente = {
      id: 0,
      nombre: "Mario",
      telefono: JSON.stringify((Math.floor(Math.random() * (99999999 - 10000000) + 1))),
      idGrupo: (Math.floor(Math.random() * (4 - 1) + 1)),
    }

    this.crearCliente(cliente);
  }

  public crearCliente(cliente: Cliente)
  {
    this.clienteService.crearCliente(cliente);
    this.obtenerClientes();
  }

  public removerCliente() {

  }

  public selectCliente(row: Cliente)
  {
    this.selectedCliente = row;
  }

  public obtenerValorFormulario(data: any){
    data.idGrupo = (Math.floor(Math.random() * (4 - 1) + 1));
    
    this.crearCliente(data);
  }

  public obtenerJson()
  {
    this.clienteService.obtenerClientesJson().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
