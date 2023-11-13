import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { BusyService } from '../busy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isNavbarCollapsed = true;
  selectedLanguage: string = 'en';

  constructor(
    private router: Router,
    public translate: TranslateService,
    private languageService: LanguageService,
    private busyService: BusyService
  ) {}

  ngOnInit(): void {
    const storedLanguage = this.languageService.getLanguage();
    if (storedLanguage) {
      this.selectedLanguage = storedLanguage;
      this.translate.use(storedLanguage);
    }
  }

  switchLang(lang: string) {
    this.selectedLanguage = lang;
    this.translate.use(lang);
    this.languageService.setLanguage(lang);
    window.location.reload();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = true;
  }

  showSpinnerAndNavigate() {
    this.busyService.busy();
    setTimeout(() => {
      this.busyService.idile();
      this.router.navigate(['/naslovna']);
    }, 700);
  }


}
