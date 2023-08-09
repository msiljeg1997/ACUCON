import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predavaci } from './models/predavaci';


@Injectable({
  providedIn: 'root'
})
export class PredavaciService {
  private apiUrl = 'https://www.wih.hr/beauty/public/api/get_kongres_predavaci';

  constructor(private http: HttpClient) { }

  getPredavaci(): Observable<Predavaci[]> {
    return this.http.get<Predavaci[]>(this.apiUrl);
  }
}
