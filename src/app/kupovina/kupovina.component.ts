import { Component, OnInit, ViewChild } from '@angular/core';
import { iRadionice } from '../models/radionice';
import { APIServis } from '../api.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-kupovina',
  templateUrl: './kupovina.component.html',
  styleUrls: ['./kupovina.component.scss']
})
export class KupovinaComponent implements OnInit {
  @ViewChild(FormGroupDirective, { static: false }) userForm!: FormGroupDirective;

  radionica: iRadionice[] = [];
  selectedCards: string[] = [];
  userName: string = '';
  userSurname: string = '';
  userMobile: string = '';
  selectedCardIndex: number = -1;

  constructor(private radioniceService: APIServis, private translate: TranslateService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loadRadionice();
  }

  loadRadionice() {
    this.radioniceService.getRadionice(this.translate.currentLang).subscribe(
      (response: any) => {
        if (this.isApiResponseValid(response)) {
          this.radionica = response.data;
          console.log('dal radi u parent', this.radionica);
        } else {
          this.handleApiError('Invalid API response', response);
        }
      },
      (error) => {
        this.handleApiError('API request failed', error);
      }
    );
  }

  addToBasket(cardTitle: string) {
    const index = this.selectedCards.indexOf(cardTitle);
    if (index !== -1) {
      this.selectedCards.splice(index, 1);
    } else {
      this.selectedCards.push(cardTitle);
    }
  }

  sendOffer() {
    const selectedWorkshopsTranslation = this.translate.instant('Workshops');
    const nameTranslation = this.translate.instant('WorkshopNameEmail');

    const selectedWorkshops = this.selectedCards.filter((cardTitle) =>
      this.radionica.some((item) => item.theme === cardTitle)
    );

    const message = `Selected Cards:\n${this.selectedCards.join(
      '\n'
    )}\n\nName: ${this.userName} ${this.userSurname}\nMobile: ${this.userMobile}`;

    const subject = `${selectedWorkshopsTranslation} ${this.userName} ${this.userSurname}`;
    const mailtoLink = `mailto:test@test.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }

  isFormValid(): boolean {
    return !!this.userForm?.form.valid;
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
  selectCard(index: number) {
    this.selectedCardIndex = index;
  }
  
}
