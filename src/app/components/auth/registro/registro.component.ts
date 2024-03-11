import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { Registro } from 'src/app/model/Registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registro!: FormGroup; // Formulario de registro
  mensaje!: string; // Mensaje para el usuario

  constructor(private myHttpService: HttpService, private route: Router) {}

  ngOnInit(): void {
    // Verificar si el usuario ya está registrado
    if (this.myHttpService.usuariData()) {
      this.route.navigate(['/home']); // Redirigir al usuario a la página de inicio si ya está registrado
    }

    // Inicializar el formulario de registro con controles y validaciones
    this.registro = new FormGroup({
      name: new FormControl('', [
        Validators.required, // El nombre es obligatorio
        Validators.maxLength(50), // Longitud máxima del nombre es 50 caracteres
      ]),
      email: new FormControl('', [
        Validators.required, // El correo electrónico es obligatorio
        Validators.email, // Validar el formato del correo electrónico
      ]),
      password: new FormControl('', Validators.required), // La contraseña es obligatoria
      password_confirmation: new FormControl('', Validators.required), // Confirmación de la contraseña obligatoria
    });

    // Inicializar el mensaje vacío
    this.mensaje = '';
  }

  // Método para enviar el formulario
  submit(): void {
    // Verificar si el formulario es válido
    if (this.registro.invalid) {
      return; // Salir si el formulario es inválido
    }

    // Crear un nuevo usuario con los datos del formulario
    const newUser = new Registro(
      this.registro.value.name,
      this.registro.value.email,
      this.registro.value.password,
      this.registro.value.password_confirmation
    );

    // Enviar la solicitud de registro al servicio HTTP
    this.myHttpService.registerUser(newUser).subscribe(
      (response) => {
        // Manejar la respuesta del servidor
        console.log('Usuario registrado con éxito:', response);
        // Redirigir al usuario a la página de inicio de sesión
        this.route.navigate(['/login']);
      },
      (error) => {
        // Manejar el error
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
