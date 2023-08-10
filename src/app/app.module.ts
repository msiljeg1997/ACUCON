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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { RadioniceComponent } from './radionice/radionice.component';
import { VinkoKlubAlkoholicaraComponent } from './vinko-klub-alkoholicara/vinko-klub-alkoholicara.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    NaslovnaComponent,
    NavBarComponent,
    TickerComponent,
    OKonferencijComponent,
    PredavaciComponent,
    RadioniceComponent,
    VinkoKlubAlkoholicaraComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  exports: [
    NgxSpinnerModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
