import { Component, OnInit } from '@angular/core';
import { Miembro } from '../../model/Miembro';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css'],
})
export class MiembrosComponent implements OnInit {
  miembros!: Miembro[]; // Aquí asegúrate de inicializar como una matriz vacía
  message: string = '';

  constructor(private myHttpService: HttpService) {}

  ngOnInit() {
    this.myHttpService.getMiembros().subscribe((miembros) => {
      this.miembros = miembros;
    });
  }

  updateMiembro(miembro: Miembro) {
    this.myHttpService
    .updateMiembro(miembro)
    .subscribe((result) => {
      if (!result.error) {
        console.log('Miembro actualizado correctamente');
      } else {
        console.log('Error al actualizar el miembro:', result.data);
      }
    });
  }

  /**-9
   * Elimina un miembro específico de la lista de miembros y del servidor.
   * @param id El ID del miembro que se va a eliminar.
   */
  eliminarMiembro(id: number): void {
    this.myHttpService.deleteMiembro(id).subscribe(
      (result) => {
        if (!result.error) {
          // Eliminar el miembro de la lista local
          this.miembros = this.miembros.filter((miembro) => miembro.id !== id);
          console.log('Miembro eliminado correctamente');
        } else {
          console.log('Error al eliminar el miembro:', result.data);
        }
      },
      (error) => {
        console.error('Error al eliminar el miembro:', error);
      }
    );
  }
}

/**
 * Actualiza la información de un miembro en el servidor.
 * @param id El ID del miembro que se va a actualizar.
 * @param name El nuevo nombre del miembro.
 * @param role El nuevo rol del miembro.
 * @param desc La nueva descripción del miembro.
 */
