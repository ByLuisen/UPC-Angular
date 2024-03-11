import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/User';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: User[] = []; // Lista de usuarios
  message: string = ''; // Mensaje para mostrar errores o confirmaciones
  searchName: string = ''; // Nombre de usuario para buscar en la lista

  constructor(private http: HttpService) {}

  ngOnInit() {
    // Obtener la lista de usuarios al inicializar el componente
    this.http.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  /**
   * Método para buscar un usuario por nombre en la lista de usuarios.
   * Si se proporciona un nombre, realiza la búsqueda y actualiza la lista de usuarios mostrados.
   */
  searchUser(): void {
    if (this.searchName.trim() !== '') {
      // Verificar si se proporciona un nombre no vacío
      this.http.searchUser(this.searchName).subscribe((usuarios) => {
        this.usuarios = usuarios; // Actualizar la lista de usuarios con los resultados de la búsqueda
      });
    }
  }

  /**
   * Actualiza la información de un usuario en el servidor.
   * @param usuario El usuario que se va a actualizar.
   */
  updateUsuario(usuario: User): void {
    this.http.updateUsuario(usuario).subscribe((result) => {
      if (!result.error) {
        console.log('Usuario actualizado correctamente');
      } else {
        console.log('Error al actualizar el usuario:', result.data);
      }
    });
  }

  /**
   * Elimina un usuario específico de la lista de usuarios y del servidor.
   * @param id El ID del usuario que se va a eliminar.
   */
  eliminarUsuario(id: number): void {
    this.http.deleteUsuario(id).subscribe(
      (result) => {
        if (!result.error) {
          // Eliminar el usuario de la lista local
          this.usuarios = this.usuarios.filter(
            (usuarios) => usuarios.id !== id
          );
          console.log('Usuario eliminado correctamente');
        } else {
          console.log('Error al eliminar el usuario:', result.data);
        }
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}
