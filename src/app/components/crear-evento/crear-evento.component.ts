import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
})
export class CrearEventoComponent {
  crearEvento!: FormGroup;
  mensaje!: string;

  constructor() {}

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

    this.mensaje = '';
  }

  submit(): void {
    // Aquí puedes agregar la lógica para enviar los datos del formulario a tu servicio de validación
  }
}
