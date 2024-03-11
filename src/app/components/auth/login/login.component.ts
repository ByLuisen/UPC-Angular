import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login!: FormGroup;
  message!: string;

  constructor(private myHttpService: HttpService, private route: Router) {}

  /**
   * Inicializa el componente.
   * Verifica si hay un usuario autenticado y redirige al usuario a la página de inicio si es así.
   * Define el formulario de inicio de sesión con los campos necesarios y las validaciones.
   */
  ngOnInit(): void {
    if (this.myHttpService.usuariData()) {
      this.route.navigate(['/home']);
    }
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * Método para procesar el envío del formulario de inicio de sesión.
   * Recopila los datos del formulario y los envía al servicio de autenticación para su validación.
   * Si la validación es exitosa, redirige al usuario a la página de inicio, de lo contrario, muestra un mensaje de error.
   */
  submit(): void {
    // Aquí puedes agregar la lógica para enviar los datos del formulario a tu servicio de validación
    //login
    let email: any = this.login.value.email;
    let password: any = this.login.value.password;

    this.myHttpService.validateLogin(email, password).subscribe((result) => {
      if (result.error) {
        this.message = 'Credencials incorrectes';
        this.login.reset();
      } else {
        this.route.navigate(['/home']);
      }
    });
  }
}
