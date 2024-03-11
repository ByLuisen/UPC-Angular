import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from '../../../model/Evento';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
})
export class CrearEventoComponent implements OnInit {
  crearEvento!: FormGroup;
  message!: string;
  usuarioID!: any;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.crearEvento = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      password_confirmation: new FormControl('', Validators.required),
    });

    document.addEventListener('DOMContentLoaded', () => {
      const fechaInicioInput = document.getElementById(
        'fecha_inicio'
      ) as HTMLInputElement;
      flatpickr(fechaInicioInput, {
        locale: Spanish,
        enableTime: true,
        dateFormat: 'd/m/Y H:i',
        minDate: 'today',
        maxDate: new Date().setMonth(new Date().getMonth() + 1),
      });
    });

    this.message = '';

    // Obtiene ID del usuario
    this.httpService.usuario.subscribe((usuario) => {
      if (usuario) {
        this.usuarioID = usuario.id;
      }
    });
  }

  submit(): void {
    if (this.crearEvento.invalid) {
      return;
    }

    // Convertir la cadena de texto a un objeto Date
    const fechaInicio: Date = new Date(this.crearEvento.value.fecha_inicio);

    const newEvento = new Evento(
      this.usuarioID,
      this.crearEvento.value.nombre,
      this.crearEvento.value.tipo,
      this.crearEvento.value.numero_participantes,
      this.crearEvento.value.fecha_inicio,
      this.crearEvento.value.duracion
    );

    console.log(JSON.stringify(newEvento));
  }
}
