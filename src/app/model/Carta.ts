export class Carta {
  #id: number;
  #photo: string;
  #nombre: string;
  #role: string;
  #coste_elexir: number;
  constructor(
    id: number = 0,
    photo: string = '',
    nombre: string = '',
    role: string = '',
    coste_elexir: number = 0
  ) {
    this.#id = id;
    this.#photo = photo;
    this.#nombre = nombre;
    this.#role = role;
    this.#coste_elexir = coste_elexir;
  }

  //Getters--------------------------
  get id(): number {
    return this.#id;
  }
  get photo(): string {
    return this.#photo;
  }
  get nombre(): string {
    return this.#nombre;
  }
  get role(): string {
    return this.#role;
  }
  get coste_elexir(): number {
    return this.#coste_elexir;
  }
  //-----------------------------------

  //Setters----------------------------
  set id(id: number) {
    this.#id = id;
  }

  set photo(photo: string) {
    this.#photo = photo;
  }
  set nombre(nombre: string) {
    this.#nombre = nombre;
  }
  set role(role: string) {
    this.#role = role;
  }
  set coste_elexir(coste_elexir: number) {
    this.#coste_elexir = coste_elexir;
  }
  //-----------------------------------

  toJSON(): any {
    return {
      id: this.#id,
      photo: this.#photo,
      nombre: this.#nombre,
      role: this.#role,
      coste_elexir: this.#coste_elexir,
    };
  }
}
