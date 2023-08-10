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


  //umjetni spinner jer ne moze preko interceptora jer naslovna nema http req pa da budemo konzistentni :D
  showSpinner() {
    this.busyService.busy();

    setTimeout(() => {
      this.busyService.idile();
      this.router.navigate(['/naslovna']);
    }, 700);
  }
}