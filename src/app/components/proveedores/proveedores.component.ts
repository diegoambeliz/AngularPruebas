import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { InfoInput } from '../shared/form/form.component';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['id', 'nombre', 'telefono', 'email'];
  public dataSource!: MatTableDataSource<Proveedor>;
  public infoInputsProveedor: InfoInput[];
  public selectedProveedor!: Proveedor;

  @ViewChild(MatTable) table!: MatTable<Proveedor>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private proveedorService: ProveedorService
  ) { 
    this.dataSource = new MatTableDataSource();

    this.infoInputsProveedor = [
      {
        id: "nombre",
        name: "nombre",
        placeholder: "Seleccione un nombre",
        title: "Nombre",
        formControlName: "nombre"
      },
      {
        id: "email",
        name: "email",
        placeholder: "Seleccione un email",
        title: "Correo electrónico",
        formControlName: "email"
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
    this.obtenerProveedores();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public obtenerProveedores() {
    this.proveedorService.obtenerProveedores().subscribe(
      res => {
        this.dataSource.data = res;
      },
      err => {
        alert("Error");
      }
    );
  }

  public agregarProveedorRandom()
  {
    let proveedor: Proveedor = {
      id: 0,
      nombre: "Mario",
      telefono: JSON.stringify((Math.floor(Math.random() * (99999999 - 10000000) + 1))),
      email:"marcos@gmail.com",
      activo: true
    }

    this.crearProveedor(proveedor);
  }


  public selectProveedor(row: any)
  {
    this.selectedProveedor = row;
  }

  public crearProveedor(proveedor: Proveedor)
  {
    this.proveedorService.crearProveedor(proveedor);
    this.obtenerProveedores();
  }

  public obtenerValorFormulario(data: any)
  { 
    this.crearProveedor(data);
  }

}
