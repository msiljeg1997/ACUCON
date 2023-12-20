import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.scss']
})
export class NaslovnaComponent implements AfterViewInit {
  showContent: boolean | undefined;

  constructor(private translate: TranslateService) {}

// simuliranai deelay radi konzistencije 
 ngAfterViewInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 700); 
  }

  getImagePath(): string {

    const currentLang = this.translate.currentLang;
    
    const imagePaths: { [key: string]: string } = {
      en: 'assets/acucENG1.png',
      hr: 'assets/acucHRV1.png'
    };

    return imagePaths[currentLang] || 'assets/acunova1engp.png'; 
  }

  getImagePath2(): string {

    const currentLang = this.translate.currentLang;
    
    const imagePaths: { [key: string]: string } = {
      en: 'assets/acucENG2.png',
      hr: 'assets/acucHRV2.png'
    };

    return imagePaths[currentLang] || 'assets/acunova1engp.png'; 
  }
}
