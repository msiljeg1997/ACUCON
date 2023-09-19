import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BusyService } from '../busy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-okonferencij',
  templateUrl: './okonferencij.component.html',
  styleUrls: ['./okonferencij.component.scss']
})
export class OkonferencijComponent implements OnInit {

  constructor(private busyService: BusyService, private router: Router, public translate: TranslateService) {}

  ngOnInit() {
    this.showSpinner();
  }

  showSpinner() {
    this.busyService.busy();

    setTimeout(() => {
      this.busyService.idile();
    }, 700); 
  }
}
