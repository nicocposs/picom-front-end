export class Utilisateur {

  id: number = 0;
  email: string = "";
  role: string = "";

  constructor(id: number, email: string, role: string) {
    this.id = id;
    this.email = email;
    this.role = role;
  }

}
