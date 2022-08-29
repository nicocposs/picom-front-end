import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import {AjouterAnnonceComponent} from './ajouter-annonce/ajouter-annonce.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path:'', component: ConnexionComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'annonces',component: AnnoncesComponent},
  {path:'annonce/:id',  component:DetailAnnonceComponent},
  {path:'ajoutannonce', component:AjouterAnnonceComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
