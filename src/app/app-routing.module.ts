import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DashboardBaseComponent } from './components/dashboard-base/dashboard-base.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', 
    component: DashboardBaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'facturacion',
        component: FacturacionComponent
      },
      {
        path: 'cliente',
        component: ClienteComponent
      },
      {
        path: 'proveedores',
        component: ProveedoresComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
