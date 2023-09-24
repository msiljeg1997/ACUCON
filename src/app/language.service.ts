import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANG_STORAGE_KEY = 'selectedLanguage';

  setLanguage(lang: string): void {
    localStorage.setItem(this.LANG_STORAGE_KEY, lang);
  }

  getLanguage(): string | null {
    return localStorage.getItem(this.LANG_STORAGE_KEY);
  }
}