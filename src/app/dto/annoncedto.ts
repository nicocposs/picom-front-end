export class AnnonceDto {
  dateHeureDebut: Date;
  dateHeureFin: Date;
  titre: string;
  contenu: string;
  numeroCarte: string;
  anneeExpiration: number;
  moisExpiration: string;
  cryptogramme: string;
  montantRegleEnEuros: number;
  clientId: number;
  zonesIds: number[];
  trancheHorairesIds: number[];

  constructor(dateHeureDebut: Date, dateHeureFin: Date, titre: string, contenu: string, numeroCarte: string, anneeExpiration: number, moisExpiration: string, cryptogramme: string, montantRegleEnEuros: number, cliendId: number, zonesIds: number[], trancheHorairesIds: number[]) {
    this.dateHeureDebut = dateHeureDebut;
    this.dateHeureFin = dateHeureFin;
    this.titre = titre;
    this.contenu = contenu;
    this.numeroCarte = numeroCarte;
    this.anneeExpiration = anneeExpiration;
    this.moisExpiration = moisExpiration;
    this.cryptogramme = cryptogramme;
    this.montantRegleEnEuros = montantRegleEnEuros;
    this.clientId = cliendId;
    this.zonesIds = zonesIds;
    this.trancheHorairesIds = trancheHorairesIds;
  }
}
