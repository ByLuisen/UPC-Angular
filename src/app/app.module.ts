import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { MisEventosComponent } from './components/mis-eventos/mis-eventos.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GestionarCartasComponent } from './components/gestionar-cartas/gestionar-cartas.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    PerfilComponent,
    RegistroComponent,
    NavigationComponent,
    LoginComponent,
    FooterComponent,
    EquipoComponent,
    CartasComponent,
    NotFoundComponent,
    HomeComponent,
    EventosComponent,
    MisEventosComponent,
    CrearEventoComponent,
    UsuariosComponent,
    GestionarCartasComponent,
    MiembrosComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
