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
    // Get the current language from the TranslateService
    const currentLang = this.translate.currentLang;

    // Define the image paths based on language
    const imagePaths: { [key: string]: string } = {
      en: 'assets/ACU.jpg',
      hr: 'assets/ACUHRV.jpg'
    };

    // Return the appropriate image path based on the current language
    return imagePaths[currentLang];
  }
}
