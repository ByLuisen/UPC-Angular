import { Component } from '@angular/core';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css'],
})
export class CartasComponent {
  numeros: number[] = [];

  constructor() {
    // Genera un arreglo de números del 1 al 29
    this.numeros = Array.from({ length: 29 }, (_, index) => index + 1);
  }
}
