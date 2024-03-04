import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfl', component: PerfilComponent },
  { path: 'eventos', component: EventosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
