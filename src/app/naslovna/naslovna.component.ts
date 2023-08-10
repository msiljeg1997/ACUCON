import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.scss']
})
export class NaslovnaComponent implements AfterViewInit {
  showContent: boolean | undefined;

  constructor(){}

// simuliranai deelay radi konzistencije 
 ngAfterViewInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 700); 
  }
}