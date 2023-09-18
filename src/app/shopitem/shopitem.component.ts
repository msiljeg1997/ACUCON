import { Component, Input, OnInit } from '@angular/core';
import { iRadionice } from '../models/radionice';
import { APIServis } from '../api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shopItems',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.scss']
})
export class ShopitemComponent  {
  @Input() radionice?: iRadionice;
  

  constructor(private translate: TranslateService ) {
    console.log('dal radi u child', this.radionice);
  }

  klikTest(){
    console.log(this.radionice);
  }


}
