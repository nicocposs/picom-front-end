import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';

const routes: Routes = [
  {path:'', component: AnnoncesComponent},
  {path:'annonce/:id',  component:DetailAnnonceComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
