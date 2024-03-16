import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
/**
 * Guardia de seguridad para proteger las rutas según el rol del usuario.
 */
export class RoleGuardGuard implements CanActivate {
  constructor(private router: Router, private httpService: HttpService) {}

  /**
   * Método para determinar si un usuario tiene permiso para acceder a una ruta.
   * @param route La ruta activada actualmente.
   * @returns Un valor booleano que indica si el usuario tiene permiso para acceder a la ruta.
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = this.httpService.getRole(); // Obtener el rol del usuario desde el servicio HTTP
    
    if (role == 'admin') {
      // Si el usuario tiene el rol de administrador, permitir el acceso
      return true;
    }

    // Si el usuario no tiene permiso, redirigirlo a la página de inicio
    this.router.navigate(['/home']);
    return false;
  }
}
