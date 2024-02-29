import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registro!: FormGroup;
  mensaje!: string;

  constructor() {}

  ngOnInit(): void {
    this.registro = new FormGroup({
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
