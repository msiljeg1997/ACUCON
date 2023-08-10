import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { iPredavaci } from '../models/predavaci';
import { APIServis } from '../api.service';


@Component({
  selector: 'app-predavaci',
  templateUrl: './predavaci.component.html',
  styleUrls: ['./predavaci.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PredavaciComponent implements OnInit {
  participants: iPredavaci[] = [];
  imageUrlBasePredavaci = 'https://wih.hr/beauty/public/predavaci_images/';

  constructor(private predavaciService: APIServis) { }

  ngOnInit(): void {
    this.loadParticipants();
  }
  
  loadParticipants() {
    this.predavaciService.getPredavaci().subscribe(
      (response: any) => {
        if (this.isApiResponseValid(response)) {
          this.participants = response.data;
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
  
  getImageUrl(photoName: string): string {
    return this.imageUrlBasePredavaci + photoName;
  }

}
  
