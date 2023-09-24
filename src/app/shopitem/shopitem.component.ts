import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { iRadionice } from '../models/radionice';
import { APIServis } from '../api.service';
import { TranslateService } from '@ngx-translate/core';

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



  constructor(private translate: TranslateService) {
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

}