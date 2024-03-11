import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';
import { Carta } from 'src/app/model/Carta';

@Component({
  selector: 'app-crear-carta',
  templateUrl: './crear-carta.component.html',
  styleUrls: ['./crear-carta.component.css'],
})
export class CrearCartaComponent implements OnInit {
  crearCartaForm!: FormGroup; // Formulario para crear una nueva carta
  roles: string[] = ['Cuerpo a cuerpo', 'Luchador', 'Tirador', 'Apoyo']; // Roles disponibles para las cartas
  costeElixir: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Valores posibles para el coste de elixir
  message!: string; // Mensaje para mostrar errores o confirmaciones

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    // Inicializar el formulario con validadores para cada campo
    this.crearCartaForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
      ]),
      photo: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      coste_elixir: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
    });
  }

  /**
   * Método para enviar el formulario de creación de carta.
   * Verifica si el formulario es válido antes de enviar la solicitud al servicio HTTP para agregar la carta.
   * Si la solicitud es exitosa, redirige al usuario a la página de cartas.
   * En caso de error, muestra un mensaje de error.
   */
  submit(): void {
    // Verificar si el formulario es válido
    if (this.crearCartaForm.invalid) {
      return;
    }

    // Crear un objeto Carta con los datos del formulario
    const newCarta = new Carta(
      this.crearCartaForm.value.nombre,
      this.crearCartaForm.value.photo,
      this.crearCartaForm.value.rol,
      this.crearCartaForm.value.coste_elexir
    );

    console.log(JSON.stringify(newCarta)); // Mostrar la carta creada en formato JSON en la consola

    // Enviar la solicitud para agregar la nueva carta al servidor
    this.httpService
      .addCartas(
        newCarta.photo,
        newCarta.nombre,
        newCarta.role,
        newCarta.coste_elexir
      )
      .subscribe(
        (response) => {
          if (response.error) {
            this.message = 'Error al agregar carta'; // Mostrar mensaje de error si hubo un problema
          } else {
            this.router.navigate(['/cartas']); // Redirigir a la página de cartas si se agregó la carta correctamente
          }
        },
        (error) => {
          console.error('Error al agregar carta:', error); // Registrar el error en la consola
          this.message = 'Error al conectar con el servidor'; // Mostrar mensaje de error si hubo un problema de conexión
        }
      );
  }
}
