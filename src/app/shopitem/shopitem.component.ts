import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { iRadionice } from '../models/radionice';
import { APIServis } from '../api.service';
import { TranslateService } from '@ngx-translate/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shopItems',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShopitemComponent {
  @Input() radionice?: iRadionice;
  @Output() cardSelected = new EventEmitter<string>();
  isSelected: boolean = false;
  isExpanded: boolean = false;
  showMoreMobile: boolean = false;





  constructor(private translate: TranslateService, private renderer: Renderer2) {
  }
  

  addToBasket() {
    const cardTitle = this.radionice?.theme;
    if (cardTitle) {
      this.cardSelected.emit(cardTitle);
    }
  }

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }
  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
    const cardTextElement = document.querySelector('.pTextDiv p.card-body') as HTMLElement;
    if (this.isExpanded) {
      this.renderer.removeStyle(cardTextElement, 'max-height');
      this.renderer.removeStyle(cardTextElement, 'overflow');
    } else {
      this.renderer.setStyle(cardTextElement, 'max-height', '500px');
      this.renderer.setStyle(cardTextElement, 'overflow', 'hidden');
    }
  }
}