import { Component } from '@angular/core';

@Component({
  selector: 'app-smjestaj',
  templateUrl: './smjestaj.component.html',
  styleUrls: ['./smjestaj.component.scss']
})
export class SmjestajComponent {





  openLinkInNewWindow() {
    const link = 'https://amadriapark.reserve-online.net/?lang=en&geoid=32368&checkin=2024-04-19&adults=1&children=0&infants=0&rooms=1&nights=1&bkcode=WIH2023';
    window.open(link, '_blank');
  }
}
