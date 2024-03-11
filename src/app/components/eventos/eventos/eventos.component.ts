import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Evento } from 'src/app/model/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  userRole!: string | null;
  eventos!: Evento[];
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    if (this.http.getRole() != null) {
      this.userRole = this.http.getRole();
    }
    this.http.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
  }

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const eventoContainers = document.querySelectorAll('.evento-container');

      eventoContainers.forEach((element: any) => {
        element.addEventListener('mouseover', () => {
          const overlay = element.querySelector('.overlay') as HTMLElement;
          overlay.classList.toggle('d-none', false);
          overlay.classList.toggle('d-block', true);
        });

        element.addEventListener('mouseout', () => {
          const overlay = element.querySelector('.overlay') as HTMLElement;
          overlay.classList.toggle('d-none', true);
          overlay.classList.toggle('d-block', false);
        });
      });
    });
  }

  formatearFecha(fecha: string): string {
    const [fechaParte, horaParte] = fecha.split(' ');
    const [dia, mes, ano] = fechaParte.split('/');
    const [hora, minutos] = horaParte.split(':');

    const fechaObj = new Date(
      `${ano}-${mes}-${dia}T${hora}:${minutos}:00.000Z`
    );

    if (isNaN(fechaObj.getTime())) {
      return 'Error al crear el objeto Date desde la cadena de fecha.';
    }

    const diaFormateado = fechaObj.getDate().toString().padStart(2, '0');
    const mesFormateado = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
    const horasFormateadas = fechaObj.getHours().toString().padStart(2, '0');
    const minutosFormateados = fechaObj
      .getMinutes()
      .toString()
      .padStart(2, '0');

    return `${diaFormateado}/${mesFormateado} ${horasFormateadas}:${minutosFormateados}`;
  }

  inscribirse(id: any): void {
    // this.http.inscribirseEvento(id).subscribe((eventos) => {
    // });
  }

  eliminarEvento(id: any): void {
    this.http.deleteEvento(id).subscribe((result) => {
      if (!result.error) {
        // Eliminar el artículo de la lista local
        this.eventos = this.eventos.filter((evento) => evento.id !== id);
        console.log('Artículo eliminado correctamente');
      } else {
        console.log('Error al eliminar el artículo:', result.data);
      }
    });
  }
  editarEvento(id: any): void {}
}
