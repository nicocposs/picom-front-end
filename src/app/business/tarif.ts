import { TrancheHoraire } from "./tranchehoraire";
import { Zone } from "./zone";

export class Tarif{
  id:number;
  prixEnEuros:number;
  trancheHoraire:TrancheHoraire;
  zone:Zone;

  constructor(id:number, prixEnEuros:number, trancheHoraire:TrancheHoraire, zone:Zone){
    this.id = id;
    this.prixEnEuros = prixEnEuros;
    this.trancheHoraire = trancheHoraire;
    this.zone = zone;
  }
}
