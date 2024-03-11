import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service'; // Asegúrate de importar correctamente tu servicio
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventos-inscritos',
  templateUrl: './eventos-inscritos.component.html',
  styleUrls: ['./eventos-inscritos.component.css'],
})
export class EventosInscritosComponent implements OnInit {
  eventos: any[] = [];
  successMessage: string = '';
  userId!: number;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getEventosInscritos().subscribe((eventos) => {
      this.eventos = eventos;
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
}
