export class User {
  #id: number;
  #name: string;
  #email: string;
  #password: string;
  #partidas_jugadas: string;
  #partidas_ganadas: string;
  #partidas_empatadas: string;
  #partidas_perdidas: string;

  constructor(
    id: number = 0,
    name: string = '',
    email: string = '',
    password: string = '',
    partidas_jugadas: string = '0',
    partidas_ganadas: string = '0',
    partidas_empatadas: string = '0',
    partidas_perdidas: string = '0'
  ) {
    this.#id = id;
    this.#name = name;
    this.#email = email;
    this.#password = password;
    this.#partidas_jugadas = partidas_jugadas;
    this.#partidas_ganadas = partidas_ganadas;
    this.#partidas_empatadas = partidas_empatadas;
    this.#partidas_perdidas = partidas_perdidas;
  }

  // Getters
  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }
  get email(): string {
    return this.#email;
  }
  get password(): string {
    return this.#password;
  }
  get partidas_jugadas(): string {
    return this.#partidas_jugadas;
  }
  get partidas_ganadas(): string {
    return this.#partidas_ganadas;
  }
  get partidas_empatadas(): string {
    return this.#partidas_empatadas;
  }
  get partidas_perdidas(): string {
    return this.#partidas_perdidas;
  }

  // Setters
  set id(id: number) {
    this.#id = id;
  }

  set name(name: string) {
    this.#name = name;
  }
  set email(email: string) {
    this.#email = email;
  }
  set password(password: string) {
    this.#password = password;
  }
  set partidas_jugadas(partidas_jugadas: string) {
    this.#partidas_jugadas = partidas_jugadas;
  }
  set partidas_ganadas(partidas_ganadas: string) {
    this.#partidas_ganadas = partidas_ganadas;
  }
  set partidas_empatadas(partidas_empatadas: string) {
    this.#partidas_empatadas = partidas_empatadas;
  }
  set partidas_perdidas(partidas_perdidas: string) {
    this.#partidas_perdidas = partidas_perdidas;
  }

  // Método toObject
  toJSON(): any {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      password: this.#password,
      partidas_jugadas: this.#partidas_jugadas,
      partidas_ganadas: this.#partidas_ganadas,
      partidas_empatadas: this.#partidas_empatadas,
      partidas_perdidas: this.#partidas_perdidas,
    };
  }
}
