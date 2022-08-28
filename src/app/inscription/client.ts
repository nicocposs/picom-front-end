export class Client {

  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  numeroDeTelephone: string;

constructor(nom: string, prenom: string, email: string, motDePasse: string, numeroDeTelephone: string) {

  this.nom = nom;
  this.prenom = prenom;
  this.email = email;
  this.motDePasse = motDePasse;
  this.numeroDeTelephone = numeroDeTelephone;
}

}
