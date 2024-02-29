import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
//   constructor(private formBuilder: FormBuilder, private router: Router) {}

//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//     });
//   }

//   get f() {
//     return this.loginForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;

//     // Detener si el formulario no es válido
//     if (this.loginForm.invalid) {
//       return;
//     }

//     // Lógica de inicio de sesión aquí
//     console.log('Iniciar sesión exitoso');
//     this.router.navigate(['/dashboard']); // Redirigir a la página de inicio después de iniciar sesión
//   }
// }
