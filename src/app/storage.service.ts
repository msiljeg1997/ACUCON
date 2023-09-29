import { Injectable } from '@angular/core';
import { iRadionice } from './models/radionice';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private translate: TranslateService
  ) { }

  public changedSelectedWorkshop(odabraneRadionice: string[]){
    localStorage.setItem('odabraneRadionice', JSON.stringify(odabraneRadionice));
  }

  public getSelectedWorkshops(): string[] {
    if (!localStorage.getItem('odabraneRadionice')) {
      return [''];
    }

    return JSON.parse(localStorage.getItem('odabraneRadionice') ?? '')
  }
  
  public getButtonTranslation(radionice: iRadionice): void {
    if (radionice.selected){
      this.translate.get('selected').subscribe(res => {
         radionice.button_name = res;
     });
    } else {
      this.translate.get('select').subscribe(res => {
        radionice.button_name = res;
      });
    }
  } 
}