import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service'; // Import your language service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Konferencija';


  constructor(
    public translate: TranslateService,

  ) {
    translate.addLangs(['en', 'hr']);
    translate.setDefaultLang('en');
  }




}
