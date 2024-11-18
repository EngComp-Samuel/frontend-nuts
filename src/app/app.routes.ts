import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {ApresentacaoComponent} from './apresentacao/apresentacao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'apresentacao', pathMatch: 'full'}, // Rota padrão
  { path: 'apresentacao', component: ApresentacaoComponent }, // Rota padrão
  { path: 'login', component: LoginComponent }, // Rota para o componente "Home"
];
