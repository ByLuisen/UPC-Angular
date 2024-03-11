export class Registro {
  #name: string;
  #email: string;
  #password: string;
  #password_confirmation: string;

  constructor(
    name: string = '',
    email: string = '',
    password: string = '',
    password_confirmation: string = ''
  ) {
    this.#name = name;
    this.#email = email;
    this.#password = password;
    this.#password_confirmation = password_confirmation;
  }

  // Getters
  get name(): string {
    return this.#name;
  }
  get email(): string {
    return this.#email;
  }
  get password(): string {
    return this.#password;
  }

  get password_confirmation(): string {
    return this.#password_confirmation;
  }

  // Setters
  set name(name: string) {
    this.#name = name;
  }
  set email(email: string) {
    this.#email = email;
  }
  set password(password: string) {
    this.#password = password;
  }
  set password_confirmation(password_confirmation: string){
    this.#password_confirmation = password_confirmation;
  }

  // Método toObject
  toJSON(): any {
    return {
      name: this.#name,
      email: this.#email,
      password: this.#password,
      password_confirmation: this.#password_confirmation
    };
  }
}
