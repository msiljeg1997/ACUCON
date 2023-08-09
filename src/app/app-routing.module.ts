import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredavaciComponent } from './predavaci/predavaci.component'; // Adjust the path if necessary
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'predavaci',
    component: PredavaciComponent
  },
  // You can add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
