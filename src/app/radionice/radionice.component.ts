import { Component, OnInit } from '@angular/core';
import { APIServis } from '../api.service';
import { iRadionice } from '../models/radionice';

@Component({
  selector: 'app-radionice',
  templateUrl: './radionice.component.html',
  styleUrls: ['./radionice.component.scss']
})

export class RadioniceComponent implements OnInit {
  radionice: iRadionice[] = [];

  constructor(private radioniceService: APIServis ) {}

  ngOnInit(): void {
    this.loadRadionice();
  }

  loadRadionice() {
    this.radioniceService.getRadionice().subscribe(
      (response: any) => {
        if (this.isApiResponseValid(response)) {
          this.radionice = response.data;
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
  

}
