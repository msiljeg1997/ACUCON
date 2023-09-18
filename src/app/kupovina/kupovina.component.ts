import { Component, OnInit } from '@angular/core';
import { iRadionice } from '../models/radionice';
import { APIServis } from '../api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-kupovina',
  templateUrl: './kupovina.component.html',
  styleUrls: ['./kupovina.component.scss']
})
export class KupovinaComponent implements OnInit{

  radionica: iRadionice[] = [];

  constructor(private radioniceService: APIServis, private translate: TranslateService ) {}

  ngOnInit() {
this.loadRadionice();
  }

  loadRadionice() {
    this.radioniceService.getRadionice(this.translate.currentLang).subscribe(
      (response: any) => {
        if (this.isApiResponseValid(response)) {
          this.radionica = response.data;
          console.log('dal radi u parent',this.radionica);
        } else {
          this.handleApiError('Invalid API response', response);
        }
      },
      (error) => {
        this.handleApiError('API request failed', error);
      }
    );
  }


  //error handling functions section
  
  private isApiResponseValid(response: any): boolean {
    return (
      response &&
      response.status === 'OK' &&
      response.msg === 'request_success' &&
      Array.isArray(response.data)
    );
  }
  
  private handleApiError(message: string, error: any): void {
    const errorMessage = error.status
      ? `API request failed with status ${error.status}`
      : 'An error occurred';
  
    console.error(`${message}:`, errorMessage, error);
  }
  //maknut vinko
}
