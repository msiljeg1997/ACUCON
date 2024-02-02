import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.scss']
})
export class NaslovnaComponent implements AfterViewInit {
  showContent: boolean | undefined;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

// simuliranai deelay radi konzistencije 
 ngAfterViewInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 700); 
  }

  getImagePath(): string {

    let currentLang = this.translate.currentLang;
    if (!currentLang) {
      currentLang = 'en';
    }
    
    const imagePaths: { [key: string]: string } = {
      en: 'assets/acucENG1.png',
      hr: 'assets/acucHRV1.png'
    };

    return imagePaths[currentLang] || 'assets/acunova1engp.png'; 
  }

  getImagePath2(): string {

    let currentLang = this.translate.currentLang;
    if (!currentLang) {
      currentLang = 'en';
    }
    
    const imagePaths: { [key: string]: string } = {
      en: 'assets/acucENG2.png',
      hr: 'assets/acucHRV2.png'
    };

    return imagePaths[currentLang] || 'assets/acunova1engp.png'; 
  }
}
