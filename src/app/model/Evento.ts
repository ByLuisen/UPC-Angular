export class Evento {
  #id: number;
  #user_id: number;
  #nombre: string;
  #tipo: string;
  #numero_participantes: number;
  #fecha_inicio: string;
  #duracion: string;

  constructor(
    id: number = 0,
    user_id: number = 0,
    nombre: string = '',
    tipo: string = '',
    numero_participantes: number = 0,
    fecha_inicio: string = '',
    duracion: string = '',
  ) {
    this.#id = id,
    this.#user_id = user_id;
    this.#nombre = nombre;
    this.#tipo = tipo;
    this.#numero_participantes = numero_participantes;
    this.#fecha_inicio = fecha_inicio;
    this.#duracion = duracion;
  }

  //Getters--------------------------
  get id():number {
    return this.#id;
  }

  get user_id(): number {
    return this.#user_id;
  }
  get nombre(): string {
    return this.#nombre;
  }
  get tipo(): string {
    return this.#tipo;
  }
  get numero_participantes(): number {
    return this.#numero_participantes;
  }
  get fecha_inicio(): string {
    return this.#fecha_inicio;
  }
  get duracion(): string {
    return this.#duracion;
  }
  //-----------------------------------

  //Setters----------------------------
  set id(id: number) {
    this.#id = id;
  }

  set user_id(user_id: number) {
    this.#user_id = user_id;
  }
  set nombre(nombre: string) {
    this.#nombre = nombre;
  }
  set tipo(tipo: string) {
    this.#tipo = tipo;
  }
  set numero_participantes(numero_participantes: number) {
    this.#numero_participantes = numero_participantes;
  }
  set fecha_inicio(fecha_inicio: string) {
    this.#fecha_inicio = fecha_inicio;
  }
  set duracion(duracion: string) {
    this.#duracion = duracion;
  }

  //-----------------------------------

  toJSON(): any {
    return {
      id: this.#id,
      user_id: this.#user_id,
      nombre: this.#nombre,
      tipo: this.#tipo,
      numero_participantes: this.#numero_participantes,
      fecha_inicio: this.#fecha_inicio,
      duracion: this.#duracion,
    };
  }
}
