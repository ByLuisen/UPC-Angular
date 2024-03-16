import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Miembro } from '../model/Miembro';
import { Evento } from '../model/Evento';
import { User } from '../model/User';
import { Carta } from '../model/Carta';
import { Registro } from '../model/Registro';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private jwtHelper: JwtHelperService = new JwtHelperService(); // Servicio para manejar JWT
  // url: string = 'http://localhost:8000'; // URL base para las solicitudes HTTP
  url: string = 'http://49.13.160.230'; // URL del servidor
  private usuariSubject: BehaviorSubject<any>; // Subject para mantener el estado del usuario autenticado
  public usuario: Observable<any>; // Observable que emite el estado del usuario

  constructor(private _http: HttpClient) {
    this.usuariSubject = new BehaviorSubject<any>(
      localStorage.getItem('myToken')
    ); // Inicializar el subject con el token almacenado en el localStorage
    this.usuario = this.usuariSubject.asObservable(); // Observable que emite el estado del usuario
  }

  // Obtener el nombre del usuario desde el token JWT
  getUserName(): string | null {
    const token = localStorage.getItem('myToken');

    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.name || null;
    }

    return null;
  }

  // Obtener el rol del usuario desde el token JWT
  getRole(): string | null {
    const token = localStorage.getItem('myToken');

    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.role || null;
    }

    return null;
  }

  // Obtener el estado actual del usuario
  public usuariData(): any {
    return this.usuariSubject.value;
  }

  // Validar el inicio de sesión del usuario
  validateLogin(email: string, password: string): Observable<any> {
    return this._http
      .post<any>(
        this.url + '/api/auth/login',
        { email: email, password: password },
        { responseType: 'json' }
      )
      .pipe(
        map((res) => {
          if (!res.error) {
            localStorage.setItem('myToken', res.access_token); // Almacenar el token en el localStorage
            this.usuariSubject.next(res.access_token); // Actualizar el subject con el token
          }
          return res;
        })
      );
  }

  // Registrar un nuevo usuario
  registerUser(usuario: Registro): Observable<any> {
    return this._http.post<any>(`${this.url}/api/auth/register`, usuario);
  }

  // Obtener todas las cartas
  getCartas(): Observable<Carta[]> {
    return this._http
      .get<any>(`${this.url}/api/cartas`)
      .pipe(map((response) => response.data as Carta[]));
  }

  // Agregar una nueva carta
  addCartas(
    photo: string,
    nombre: string,
    role: string,
    coste_elexir: number
  ): Observable<any> {
    return this._http.post<any>(this.url + '/addCarta', {
      photo: photo,
      nombre: nombre,
      role: role,
      coste_elexir: coste_elexir,
    });
  }

  // Eliminar una carta
  deleteCarta(cartaID: string): Observable<any> {
    return this._http.delete<any>(`${this.url}/cartas/${cartaID}`);
  }

  // Actualizar una carta existente
  updateCarta(
    id: string,
    photo: string,
    nombre: string,
    role: string,
    coste_elexir: number
  ): Observable<any> {
    return this._http.put<any>(`${this.url}/cartas/${id}`, {
      photo: photo,
      nombre: nombre,
      role: role,
      coste_elexir: coste_elexir,
    });
  }

  // Obtener todos los eventos
  getEventos(): Observable<Evento[]> {
    return this._http
      .get<any>(`${this.url}/api/eventos`)
      .pipe(map((response) => response.data as Evento[]));
  }

  // Obtener eventos inscritos por el usuario
  getMisEventos(): Observable<Evento[]> {
    return this._http
      .get<any>(`${this.url}/api/mis_eventos`)
      .pipe(map((response) => response.data as Evento[]));
  }

  // Obtener eventos en los que el usuario está inscrito
  getEventosInscritos(): Observable<Evento[]> {
    return this._http
      .get<any>(`${this.url}/api/eventos_inscritos`)
      .pipe(map((response) => response.data as Evento[]));
  }

  inscribirseEvento(id: number): Observable<any> {
    return this._http.post<any>(
      `${this.url}/api/eventos/${id}/inscribirse`, null
    );
  }

  // Agregar un nuevo evento
  addEventos(
    user_id: number,
    nombre: string,
    tipo: string,
    numero_participantes: number,
    fecha_inicio: Date,
    duracion: string
  ): Observable<any> {
    return this._http.post<any>(this.url + '/addEvento', {
      user_id: user_id,
      nombre: nombre,
      tipo: tipo,
      numero_participantes: numero_participantes,
      fecha_inicio: fecha_inicio,
      duracion: duracion,
    });
  }

  // Eliminar un evento
  deleteEvento(eventoID: string): Observable<any> {
    return this._http.delete<any>(`${this.url}/eventos/${eventoID}`);
  }

  // Actualizar un evento existente
  updateEvento(
    id: string,
    nombre: string,
    tipo: string,
    numero_participantes: number,
    fecha_inicio: Date,
    duracion: string
  ): Observable<any> {
    return this._http.put<any>(`${this.url}/eventos/${id}`, {
      nombre: nombre,
      tipo: tipo,
      numero_participantes: numero_participantes,
      fecha_inicEio: fecha_inicio,
      duracion: duracion,
    });
  }

  // Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this._http
      .get<any>(`${this.url}/api/usuarios`)
      .pipe(map((response) => response.data as User[]));
  }

  // Agregar un nuevo usuario
  addUsers(name: string, email: string, password: string): Observable<any> {
    return this._http.post<any>(this.url + '/addUser', {
      name: name,
      email: email,
      password: password,
    });
  }

  // Eliminar un usuario
  deleteUsuario(userID: number): Observable<any> {
    return this._http.delete<any>(
      `${this.url}/api/usuarios/${userID}/eliminar-usuario`
    );
  }

  // Actualizar un usuario existente
  updateUsuario(usuario: User): Observable<any> {
    return this._http.put<any>(
      `${this.url}/api/usuarios/${usuario.id}/actualizar-usuario`,
      usuario
    );
  }

  // Obtener todos los miembros
  getMiembros(): Observable<Miembro[]> {
    return this._http
      .get<any>(`${this.url}/api/miembros`)
      .pipe(map((response) => response.data.miembros as Miembro[]));
  }

  // Eliminar un miembro
  deleteMiembro(miembroID: number): Observable<any> {
    return this._http.delete<any>(
      `${this.url}/api/miembros/${miembroID}/eliminar-miembro`
    );
  }

  // Actualizar un miembro existente
  updateMiembro(miembro: Miembro): Observable<any> {
    return this._http.put<any>(
      `${this.url}/api/miembros/${miembro.id}/actualizar-miembro`,
      miembro
    );
  }

  // Obtener todos los usuarios para el ranking
  getUsuarios(): Observable<User[]> {
    return this._http
      .get<any>(`${this.url}/api/rankings`)
      .pipe(map((response) => response.data as User[]));
  }

  // Buscar usuarios por nombre para el ranking
  searchUser(name: string): Observable<User[]> {
    return this._http
      .post<any>(`${this.url}/api/rankings`, { name: name })
      .pipe(map((response) => response.data as User[]));
  }

  // Cerrar sesión del usuario
  logout() {
    this._http.get(this.url + '/api/auth/logout');
    localStorage.removeItem('myToken'); // Eliminar el token del localStorage
    this.usuariSubject.next(null); // Actualizar el subject con null para indicar que no hay usuario autenticado
  }
}
