import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'tirage', component:TirageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
