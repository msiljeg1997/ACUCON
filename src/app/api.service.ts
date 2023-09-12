import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iPredavaci } from './models/predavaci';
import { iRadionice } from './models/radionice';


@Injectable({
  providedIn: 'root'
})
export class APIServis {
  private apiUrlPredavaciENG = 'https://www.wih.hr/beauty/public/api/get_kongres_predavaci/eng';
  private apiUrlPredavaciHRV = 'https://www.wih.hr/beauty/public/api/get_kongres_predavaci/hrv';
  private apiUrlRadioniceENG = 'https://www.wih.hr/beauty/public/api/get_kongres_radionice/eng';
  private apiUrlRadioniceHRV = 'https://www.wih.hr/beauty/public/api/get_kongres_radionice/hrv';

  constructor(private http: HttpClient) { }

  //predavaci component servis
  getPredavaciENG(): Observable<iPredavaci[]> {
    return this.http.get<iPredavaci[]>(this.apiUrlPredavaciENG);
  }
  getPredavaciHRV(): Observable<iPredavaci[]> {
    return this.http.get<iPredavaci[]>(this.apiUrlPredavaciHRV);
  }

  //radionice component servis
  getRadioniceENG(): Observable<iRadionice[]> {
    return this.http.get<iRadionice[]>(this.apiUrlRadioniceENG);
  }
  getRadioniceHRV(): Observable<iRadionice[]> {
    return this.http.get<iRadionice[]>(this.apiUrlRadioniceHRV);
  }

}
