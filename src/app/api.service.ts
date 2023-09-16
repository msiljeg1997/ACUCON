import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iPredavaci } from './models/predavaci';
import { iRadionice } from './models/radionice';


@Injectable({
  providedIn: 'root'
})
export class APIServis {
  private apiUrlPredavaci = 'https://www.wih.hr/beauty/public/api/get_kongres_predavaci/';
  private apiUrlRadionice = 'https://www.wih.hr/beauty/public/api/get_kongres_radionice/';


  constructor(private http: HttpClient) { }


  getPredavaci($language : string): Observable<iPredavaci[]> {
    return this.http.get<iPredavaci[]>(this.apiUrlPredavaci + $language);
  }
  getRadionice($language: string): Observable<iPredavaci[]> {
    return this.http.get<iPredavaci[]>(this.apiUrlRadionice + $language);
  }
}
