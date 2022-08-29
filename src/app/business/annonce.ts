export class Annonce {
  contenu:string = "";
  id: number;
  dateHeureDebut:Date;
  dateHeureFin:Date;
  titre:string;
  dateDebutSimple:string = "";
  dateFinSimple:string = "";

  constructor(id: number,titre:string, dateHeureDebut:Date,dateHeureFin:Date){
    this.id = id;
    this.titre = titre;
    this.dateHeureDebut = dateHeureDebut;
    this.dateHeureFin = dateHeureFin;
  }
}
