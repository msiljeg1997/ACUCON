import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusyService } from '../busy.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  activeRoute: string = ''; 
  isNavbarCollapsed = true;
  isNavbarHidden = false;



  constructor(private busyService: BusyService, private router: Router, public translate: TranslateService) {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

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

  toggleNavbar() {
    if (this.isNavbarHidden) {
      this.isNavbarHidden = false;
    }
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarHidden = true;
    this.isNavbarCollapsed = true;
  }

  @HostListener('document:click', ['$event'])
  closeNavbarOnMobile(event: any) {
    console.log("start");
    
    if (window.innerWidth < 768) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      console.log("proso1");
      
      if (navbarCollapse?.contains(event.target)) {
        this.isNavbarCollapsed = true;
        console.log("proso2");
        
      }
    }
  }

}
