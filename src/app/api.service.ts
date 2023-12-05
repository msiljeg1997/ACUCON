import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iPredavaci } from './models/predavaci';
import { LanguageService } from './language.service';


@Injectable({
  providedIn: 'root'
})
export class APIServis {
  private apiUrlPredavaci = 'https://www.wih.hr/beauty/public/api/get_kongres_predavaci';
  private apiUrlRadionice = 'https://www.wih.hr/beauty/public/api/get_kongres_radionice';




  constructor(private http: HttpClient, private languageService: LanguageService) { }


  getPredavaci($language : string): Observable<iPredavaci[]> {
    const apiUrl = this.apiUrlPredavaci + ($language === 'hr' ? '/HR' : '/EN');
    return this.http.get<iPredavaci[]>(apiUrl);
  }


  getRadionice($language: string): Observable<iPredavaci[]> {
    const apiUrl = this.apiUrlRadionice + ($language === 'hr' ? '/HR' : '/EN');
    return this.http.get<iPredavaci[]>(apiUrl);
  }
}
