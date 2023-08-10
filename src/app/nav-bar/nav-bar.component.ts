import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusyService } from '../busy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  activeRoute: string = ''; 

  constructor(private busyService: BusyService, private router: Router) {}


  //umjetni spinner koj ide na click u navbaru --> dodatak AfterView u naslovnoj.ts => 
  //to sam radio posto interceptor radi na http req a u naslovnoj nema http req pa nije bacao spinner, pa radi konzistencije
  //UXa sam dodao...cheers!


  showSpinner() {
    this.busyService.busy();

    setTimeout(() => {
      this.busyService.idile();
      this.router.navigate(['/naslovna']);
    }, 700);
  }
}