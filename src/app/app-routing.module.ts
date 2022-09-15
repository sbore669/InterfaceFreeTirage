import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsListesComponent } from './details-listes/details-listes.component';
import { TirageComponent } from './tirage/tirage.component';
import { VoirPlusComponent } from './voir-plus/voir-plus.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'tirage', component:TirageComponent},

  {path:'detailsliste/:id', component:DetailsListesComponent},
  {path:'voirplus/:id', component:VoirPlusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
