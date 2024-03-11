import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css'],
})
export class CartasComponent implements AfterViewInit {
  numeros: number[] = [];

  constructor() {
    // Genera un arreglo de números del 1 al 29
    this.numeros = Array.from({ length: 29 }, (_, index) => index + 1);
  }
  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    const swiper = new Swiper('.swiper', {
      effect: 'cards',
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
    });
  }
}

