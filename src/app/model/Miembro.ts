export class Miembro {
  #id: number;
  #name: string;
  #role: string;
  #desc: string;
  #photo: string;
  #website: string;
  #email: string;
  #linkedin: string;
  #dribbble: string;

  constructor(
    id: number = 0,
    name: string = '',
    role: string = '',
    desc: string = '',
    photo: string = '',
    website: string = '',
    email: string = '',
    linkedin: string = '',
    dribbble: string = ''
  ) {
    this.#id = id;
    this.#name = name;
    this.#role = role;
    this.#desc = desc;
    this.#photo = photo;
    this.#website = website;
    this.#email = email;
    this.#linkedin = linkedin;
    this.#dribbble = dribbble;
  }

  //Getters--------------------------
  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }
  get role(): string {
    return this.#role;
  }
  get desc(): string {
    return this.#desc;
  }
  get photo(): string {
    return this.#photo;
  }
  get website(): string {
    return this.#website;
  }
  get email(): string {
    return this.#email;
  }
  get linkedin(): string {
    return this.#linkedin;
  }
  get dribbble(): string {
    return this.#dribbble;
  }
  //-----------------------------------

  //Setters----------------------------
  set id(id: number) {
    this.#id = id;
  }
  set name(name: string) {
    this.#name = name;
  }
  set role(role: string) {
    this.#role = role;
  }
  set desc(desc: string) {
    this.#desc = desc;
  }
  set photo(photo: string) {
    this.#photo = photo;
  }
  set website(website: string) {
    this.#website = website;
  }
  set email(email: string) {
    this.#email = email;
  }
  set linkedin(linkedin: string) {
    this.#linkedin = linkedin;
  }
  set dribbble(dribbble: string) {
    this.#dribbble = dribbble;
  }

  //-----------------------------------

  toJSON(): any {
    return {
      id: this.#id,
      name: this.#name,
      role: this.#role,
      desc: this.#desc,
      photo: this.#photo,
      website: this.#website,
      email: this.#email,
      linkedin: this.#linkedin,
      dribbble: this.#dribbble,
    };
  }
}
