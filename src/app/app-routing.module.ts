import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredavaciComponent } from './predavaci/predavaci.component'; // Adjust the path if necessary
import { RadioniceComponent } from './radionice/radionice.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';

const routes: Routes = [
  { path: '', redirectTo: '/naslovna', pathMatch: 'full' }, 
  { path: 'naslovna', component: NaslovnaComponent },
  { path: 'predavaci', component: PredavaciComponent },
  { path: 'radionice', component: RadioniceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
