import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredavaciComponent } from './predavaci/predavaci.component'; // Adjust the path if necessary
import { HomeComponent } from './home/home.component';
import { RadioniceComponent } from './radionice/radionice.component';

const routes: Routes = [
  { path: '', redirectTo: '/naslovna', pathMatch: 'full' }, 
  { path: 'naslovna', component: HomeComponent },
  { path: 'predavaci', component: PredavaciComponent },
  { path: 'radionice', component: RadioniceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
