import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { RankingsComponent } from './components/usuarios/rankings/rankings.component';
import { PerfilComponent } from './components/usuarios/perfil/perfil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EventosComponent } from './components/eventos/eventos/eventos.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { GestionarCartasComponent } from './components/cartas/gestionar-cartas/gestionar-cartas.component';
import { CrearEventoComponent } from './components/eventos/crear-evento/crear-evento.component';
import { MisEventosComponent } from './components/eventos/mis-eventos/mis-eventos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CartasComponent } from './components/cartas/cartas/cartas.component';
import { CrearCartaComponent } from './components/cartas/crear-carta/crear-carta.component';
import { MyGuardGuard } from './guards/my-guard.guard';
import { RoleGuardGuard } from './guards/role-guard.guard';
import { EventosInscritosComponent } from './components/eventos/eventos-inscritos/eventos-inscritos.component';

const routes: Routes = [
  // auth
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  // cartas
  { path: 'cartas', component: CartasComponent, canActivate: [MyGuardGuard, RoleGuardGuard] },
  { path: 'gestionar-cartas', component: GestionarCartasComponent, canActivate: [MyGuardGuard, RoleGuardGuard] },
  { path: 'crear-carta', component: CrearCartaComponent, canActivate: [MyGuardGuard, RoleGuardGuard] },

  // equipo
  { path: 'equipo', component: EquipoComponent },

  // eventos
  { path: 'eventos', component: EventosComponent, canActivate: [MyGuardGuard] },
  { path: 'crear-evento', component: CrearEventoComponent, canActivate: [MyGuardGuard] },
  { path: 'mis-eventos', component: MisEventosComponent, canActivate: [MyGuardGuard] },
  { path: 'eventos-inscritos', component: EventosInscritosComponent, canActivate: [MyGuardGuard] },

  // usuarios
  { path: 'usuarios', component: UsuariosComponent, canActivate: [MyGuardGuard, RoleGuardGuard] },
  { path: 'rankings', component: RankingsComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [MyGuardGuard] },

  { path: 'home', component: HomeComponent },

  { path: 'not-found', component: NotFoundComponent },

  { path: 'miembros', component: MiembrosComponent, canActivate: [MyGuardGuard, RoleGuardGuard] },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
