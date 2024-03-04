import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css'],
})
export class MisEventosComponent {
  eventos: any[] = [];
  constructor() {
    this.eventos = [
      {
        nombre: 'Christian Gay',
        tipo: 'Torneo',
        numero_participantes: '434',
        fecha_inicio: '27/02/2024',
        duracion: '1:30',
      },
    ];
  }
}
