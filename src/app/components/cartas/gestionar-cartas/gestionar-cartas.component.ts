import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Carta } from '../../../model/Carta';

@Component({
  selector: 'app-gestionar-cartas',
  templateUrl: './gestionar-cartas.component.html',
  styleUrls: ['./gestionar-cartas.component.css'],
})
export class GestionarCartasComponent implements OnInit {
  @ViewChildren('eventoContainer') eventoContainers?: QueryList<ElementRef>; // Lista de elementos contenedores de eventos

  cartas!: Carta[]; // Lista de cartas
  message!: string; // Mensaje de estado

  constructor(
    private myHttpService: HttpService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Obtener la lista de cartas al inicializar el componente
    this.myHttpService.getCartas().subscribe((cartas) => {
      this.cartas = cartas; // Asignar la lista de cartas obtenida del servicio HTTP
      // Verificar si eventoContainers es diferente de undefined antes de usarlo
      if (this.eventoContainers) {
        // Iterar sobre cada elemento contenedor de eventos
        this.eventoContainers.forEach((element) => {
          // Escuchar el evento mouseover para mostrar el overlay
          this.renderer.listen(element.nativeElement, 'mouseover', () =>
            this.toggleOverlayClass(element.nativeElement, true)
          );
          // Escuchar el evento mouseout para ocultar el overlay
          this.renderer.listen(element.nativeElement, 'mouseout', () =>
            this.toggleOverlayClass(element.nativeElement, false)
          );
        });
      }
    });
  }

  // Método para alternar la clase del overlay
  toggleOverlayClass(element: HTMLElement, isMouseOver: boolean): void {
    const overlay = element.querySelector('.overlay'); // Obtener el elemento overlay
    if (overlay) {
      // Verificar si el mouse está sobre el elemento
      if (isMouseOver) {
        this.renderer.removeClass(overlay, 'd-none'); // Mostrar el overlay
        this.renderer.addClass(overlay, 'd-block');
      } else {
        this.renderer.removeClass(overlay, 'd-block'); // Ocultar el overlay
        this.renderer.addClass(overlay, 'd-none');
      }
    }
  }

  // Método para editar una carta
  editarCarta(id: number): void {
    // Implementa la lógica para editar la carta
  }

  // Método para eliminar una carta
  eliminarCarta(id: any): void {
    // Realizar la solicitud de eliminación al servicio HTTP
    this.myHttpService.deleteCarta(id).subscribe((result) => {
      if (!result.error) {
        // Eliminar la carta de la lista local si se elimina correctamente
        this.cartas = this.cartas.filter((carta) => carta.id !== id);
        console.log('Carta eliminada correctamente');
      } else {
        console.log('Error al eliminar la Carta:', result.data); // Manejar el error si no se puede eliminar la carta
      }
    });
  }
}
