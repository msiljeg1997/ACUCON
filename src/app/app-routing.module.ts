import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredavaciComponent } from './predavaci/predavaci.component'; // Adjust the path if necessary
import { RadioniceComponent } from './radionice/radionice.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { OkonferencijComponent } from './okonferencij/okonferencij.component';
import { KupovinaComponent } from './kupovina/kupovina.component';
import { SmjestajComponent } from './smjestaj/smjestaj.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ZnanstvenoStrucniOdborComponent } from './znanstveno-strucni-odbor/znanstveno-strucni-odbor.component';
import { OrganizacijskiOdborComponent } from './organizacijski-odbor/organizacijski-odbor.component';

const routes: Routes = [
  { path: '', redirectTo: '/naslovna', pathMatch: 'full' }, 
  { path: 'naslovna', component: NaslovnaComponent },
  { path: 'predavaci', component: PredavaciComponent },
  { path: 'radionice', component: RadioniceComponent },
  { path: 'about', component: OkonferencijComponent },
  { path: 'shop', component: KupovinaComponent },
  { path: 'smjestaj', component: SmjestajComponent },
  { path: 'organizacije', component: OrganizationsComponent },
  { path: 'organizacijski_odbor', component: OrganizacijskiOdborComponent },
  { path: 'znanstveni_odbor', component: ZnanstvenoStrucniOdborComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
