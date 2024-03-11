import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './components/usuarios/rankings/rankings.component';
import { PerfilComponent } from './components/usuarios/perfil/perfil.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { NavigationComponent } from './components/partials/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CartasComponent } from './components/cartas/cartas/cartas.component';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos/eventos.component';
import { MisEventosComponent } from './components/eventos/mis-eventos/mis-eventos.component';
import { CrearEventoComponent } from './components/eventos/crear-evento/crear-evento.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { GestionarCartasComponent } from './components/cartas/gestionar-cartas/gestionar-cartas.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { CrearCartaComponent } from './components/cartas/crear-carta/crear-carta.component';
import { EventosInscritosComponent } from './components/eventos/eventos-inscritos/eventos-inscritos.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { RepetirPasswordDirective } from './directives/repetir-password.directive';

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
    CrearCartaComponent,
    EventosInscritosComponent,
    RepetirPasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
