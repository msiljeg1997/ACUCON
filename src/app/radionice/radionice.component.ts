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
    this.radioniceService.getPredavaci().subscribe(
      (response: any) => {
        if (this.isApiResponseValid(response)) {
          this.radionice = response.data;
        } else {
          console.error('API response daje error', response);
        }
      },
      (error) => {
        this.handleApiError(error);
      }
    );
  }


  private isApiResponseValid(response: any): boolean {
    return response.status === 'OK' && response.msg === 'request_success' && Array.isArray(response.data);
  }
  
  private handleApiError(error: any): void {
    if (error.status) {
      console.error(`API req failed sa statusom: ${error.status}:`, error);
    } else {
      console.error('Dogodio se error: (error):', error);
    }
  }

}
