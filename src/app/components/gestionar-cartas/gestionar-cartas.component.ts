import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gestionar-cartas',
  templateUrl: './gestionar-cartas.component.html',
  styleUrls: ['./gestionar-cartas.component.css'],
})
export class GestionarCartasComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {
    // Genera un arreglo de números del 1 al 29
  }
  ngAfterViewInit(): void {
    const eventoContainers =
      this.elementRef.nativeElement.querySelectorAll('.evento-container');

    eventoContainers.forEach((element: any) => {
      element.addEventListener('mouseover', () => {
        element.querySelector('.overlay').classList.toggle('d-none', false);
        element.querySelector('.overlay').classList.toggle('d-block', true);
      });

      element.addEventListener('mouseout', () => {
        element.querySelector('.overlay').classList.toggle('d-none', true);
        element.querySelector('.overlay').classList.toggle('d-block', false);
      });
    });
  }
}
