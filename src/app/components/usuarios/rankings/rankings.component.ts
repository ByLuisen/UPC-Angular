import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent implements OnInit {
  usuarios: User[] = []; // Lista de usuarios para mostrar en los rankings
  message: string = ''; // Mensaje para mostrar errores o confirmaciones
  searchName: string = ''; // Nombre de usuario para buscar en los rankings

  constructor(private http: HttpService) {}

  ngOnInit() {
    // Obtener la lista de usuarios al inicializar el componente
    this.http.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  /**
   * Método para buscar un usuario en los rankings según el nombre especificado en la barra de búsqueda.
   * Si se proporciona un nombre de usuario, realiza la búsqueda y actualiza la lista de usuarios mostrados.
   */
  searchUser(): void {
    if (this.searchName.trim() !== '') {
      // Verificar si se proporciona un nombre no vacío
      this.http.searchUser(this.searchName).subscribe((usuarios) => {
        this.usuarios = usuarios; // Actualizar la lista de usuarios con los resultados de la búsqueda
      });
    }
  }
}
