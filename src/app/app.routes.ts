import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { RouterModule } from '@angular/router';
import { Menu } from './menu/menu';
import { Pacientes } from './pacientes/pacientes';
import { Ordenes } from './ordenes/ordenes';
import { Dashboard } from './dashboard/dashboard';
import { TomaMuestraComponent } from './toma-muestra/toma-muestra';
import { ResultadosComponent } from './resultados/resultados';
import { ConsultaMedicoComponent } from './consulta-medico/consulta-medico';
import { ReportesComponent } from './reportes/reportes';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'consulta-medico', component: ConsultaMedicoComponent },

  {
    path: 'menu',
    component: Menu,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'pacientes', component: Pacientes },
      { path: 'ordenes', component: Ordenes },
      { path: 'toma-muestra', component: TomaMuestraComponent },
      { path: 'resultados', component: ResultadosComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'consulta-medico', component: ConsultaMedicoComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },


  { path: '**', redirectTo: '' }
];
