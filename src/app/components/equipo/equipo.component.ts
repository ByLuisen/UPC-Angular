import { Component, AfterViewInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
})
export class EquipoComponent implements AfterViewInit {
  team = [
    {
      name: 'Jordi Gomez',
      role: 'Game Developer',
      desc: 'Reconocido diseñador de videojuegos conocido por su habilidad para crear experiencias inmersivas y emocionantes.',
      photo: 'assets/images/avatar1sf.webp',
      website: 'https://www.google.es/',
      email: 'https://www.google.com/intl/es/gmail/about/',
      linkedin: 'https://www.linkedin.com/home',
      dribbble: 'https://dribbble.com/',
    },
    {
      name: 'Miguel Martinez',
      role: 'Game Developer',
      desc: 'Diseñador de videojuegos que destaca por su capacidad para desarrollar mecánicas de juego.',
      photo: 'assets/images/avatar2sf.webp',
      website: 'https://www.google.es/',
      email: 'https://www.google.com/intl/es/gmail/about/',
      linkedin: 'https://www.linkedin.com/home',
      dribbble: 'https://dribbble.com/',
    },
    {
      name: 'Ivan Pascuas',
      role: 'Game Developer',
      desc: 'Su habilidad para fusionar elementos visuales proporciona a los jugadores una experiencia inmersiva única.',
      photo: 'assets/images/avatar3sf.webp',
      website: 'https://www.google.es/',
      email: 'https://www.google.com/intl/es/gmail/about/',
      linkedin: 'https://www.linkedin.com/home',
      dribbble: 'https://dribbble.com/',
    },
    {
      name: 'Luis Ledesma',
      role: 'Web Developer',
      desc: 'El mejor programador de este siglo, es el faker de la programación',
      photo: 'assets/images/luisen.webp',
      website: 'https://www.google.es/',
      email: 'https://www.google.com/intl/es/gmail/about/',
      linkedin: 'https://www.linkedin.com/home',
      dribbble: 'https://dribbble.com/',
    },
    {
      name: 'Julian Ortega',
      role: 'Web Developer',
      desc: 'Apasionado por el desarrollo web y la innovación.',
      photo: 'assets/images/julian.webp',
      website: 'https://www.google.es/',
      email: 'https://www.google.com/intl/es/gmail/about/',
      linkedin: 'https://www.linkedin.com/home',
      dribbble: 'https://dribbble.com/',
    },
    {
      name: 'Christian Sastre',
      role: 'Web Developer',
      desc: 'Hábil desarrollador web con una pasión por crear experiencias digitales innovadoras. Record 0-10',
      photo: 'assets/images/calvo.webp',
      website: 'https://www.google.es/',
      email: 'https://www.google.com/intl/es/gmail/about/',
      linkedin: 'https://www.linkedin.com/home',
      dribbble: 'https://dribbble.com/',
    },
    {
      name: 'Pau Lopez',
      role: 'Web Developer',
      desc: 'Su talento y su forma de programar son inigualables',
      photo: 'assets/images/pau.webp',
      website: 'https://www.google.es/',
      email: 'https://www.google.com/intl/es/gmail/about/',
      linkedin: 'https://www.linkedin.com/home',
      dribbble: 'https://dribbble.com/',
    },
  ];

  icons = {
    iWebsite: 'https://rafaelalucas.com/dailyui/6/assets/link.svg',
    iEmail: 'https://rafaelalucas.com/dailyui/6/assets/email.svg',
    iLinkedin: 'https://rafaelalucas.com/dailyui/6/assets/linkedin.svg',
    iDribbble: 'https://rafaelalucas.com/dailyui/6/assets/dribbble.svg',
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      centeredSlides: false,
      speed: 800,
      slidesPerView: 3,
      spaceBetween: 20,
      threshold: 5,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1180: {
          slidesPerView: 2,
          spaceBetween: 40,
          centeredSlides: false,
        },
        799: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          loop: true,
        },
      },
    });
  }
}
