import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TickerComponent } from './ticker/ticker.component';
import { OKonferencijComponent } from './o-konferencij/o-konferencij.component';
import { PredavaciComponent } from './predavaci/predavaci.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import { HomeComponent } from './home/home.component';
import { RadioniceComponent } from './radionice/radionice.component';
import { VinkoKlubAlkoholicaraComponent } from './vinko-klub-alkoholicara/vinko-klub-alkoholicara.component';


@NgModule({
  declarations: [
    AppComponent,
    NaslovnaComponent,
    NavBarComponent,
    TickerComponent,
    OKonferencijComponent,
    PredavaciComponent,
    HomeComponent,
    RadioniceComponent,
    VinkoKlubAlkoholicaraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
