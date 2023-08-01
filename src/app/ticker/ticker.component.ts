import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements AfterViewInit {

  organizations = [
    'assets/10.png',
    'assets/11.png',
    'assets/12.png',
    'assets/13.png',
    'assets/14.png',

];

  @ViewChild('tickerItems', { static: false }) tickerItems!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const tickerItemsWidth = this.tickerItems.nativeElement.getBoundingClientRect().width;
    const animationDuration = 5000; 

    this.tickerItems.nativeElement.style.setProperty('--animation-duration', `${animationDuration / tickerItemsWidth}s`);
  }
}
