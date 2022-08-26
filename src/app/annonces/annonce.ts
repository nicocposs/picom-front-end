export class Annonce {
  contenu:string;
  id: number;
  dateHeureDebut:Date = new Date();
  dateHeureFin:Date = new Date();

  constructor(id: number,contenu:string, dateHeureDebut:Date,dateHeureFin:Date){
    this.id = id;
    this.contenu = contenu;
    this.dateHeureDebut = dateHeureDebut;
    this.dateHeureFin = dateHeureFin;
  }
}
