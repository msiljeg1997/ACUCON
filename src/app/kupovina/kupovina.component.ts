import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { iRadionice } from '../models/radionice';
import { APIServis } from '../api.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
import { iPredavaci } from '../models/predavaci';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-kupovina',
  templateUrl: './kupovina.component.html',
  styleUrls: ['./kupovina.component.scss']
})
export class KupovinaComponent implements OnInit {
  @ViewChild(FormGroupDirective, { static: false }) userForm!: FormGroupDirective;



  radionica: iRadionice[] = [];
  predavaci: iPredavaci[] = [];
  selectedCards: string[] = [];
  userName: string = '';
  userSurname: string = '';
  userMobile: string = '';
  userAddress: string = '';
  userOIB: string = '';
  userIsStudent: string = '';


  selectedCardIndex: number = -1;
  selectedTicket?: boolean;
  ticketButtonLabel: string = ''; 
  ticketSelections: { name: string, selected: boolean }[] = [
    { name: 'EARLY BIRD', selected: false },
    { name: 'REGULAR', selected: false },
    { name: 'STUDENT', selected: false }
  ];
  


  constructor(private storageService: StorageService, private radioniceService: APIServis, private translate: TranslateService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loadRadionice();
    this.selectedCards = this.storageService.getSelectedWorkshops();
  
    const storedTicketSelections = localStorage.getItem('ticketSelections');
    if (storedTicketSelections) {
      this.ticketSelections = JSON.parse(storedTicketSelections);
    }
    this.ticketSelections.forEach((ticket, index) => {
      this.translateTicketButton(ticket.selected);
    });
  }
  

  

  private setSelectedRadionice(radionice: iRadionice[]): iRadionice[] {
    this.selectedCards.forEach(card => {
      this.radionica.forEach(rad => {
        if (card == rad.theme) {
          rad.selected = true;
        }
      })
    })

    return radionice;
  }



  loadRadionice() {
    this.radioniceService.getRadionice(this.translate.currentLang).subscribe(
      (response: any) => {
        if (this.isApiResponseValid(response)) {
          this.radionica = response.data;
          this.radionica = this.setSelectedRadionice(this.radionica);
          console.log('dal radi u parent', this.radionica);
          console.log('Predavaci data in KupovinaComponent: ', this.predavaci);
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

    this.storageService.changedSelectedWorkshop(this.selectedCards);
  }
  sendOffer() {
    // Create an array to store selected ticket names
    const selectedTickets = this.ticketSelections
      .filter(ticket => ticket.selected)
      .map(ticket => ticket.name);
  
    const selectedWorkshopsTranslation = this.translate.instant('Workshops');
    const nameTranslation = this.translate.instant('WorkshopNameEmail');
  
    // Create an array of workshop names based on selectedCards
    const selectedWorkshops = this.selectedCards.map((cardTitle) =>
      this.radionica.find((item) => item.theme === cardTitle)?.theme || ''
    );
  
    // Remove any empty strings from the selectedWorkshops array
    const filteredSelectedWorkshops = selectedWorkshops.filter((workshop) => workshop !== '');
  
    // Include selected ticket information if there are selected tickets
    let ticketInfo = '';
    if (selectedTickets.length > 0) {
      ticketInfo = `Selected Ticket(s): ${selectedTickets.join(', ')}`;
    }
  
    // Create a new line for selected workshops and selected tickets
    const selectedWorkshopsInfo = `Selected Workshops:\n${filteredSelectedWorkshops.join('\n')}`;
    const selectedTicketsInfo = ticketInfo;
  
    // Combine all the information into the message
    const message = `Name: ${this.userName}\nAddress: ${this.userAddress}\nOIB: ${this.userOIB}\nMobile: ${this.userMobile}\n\n${selectedWorkshopsInfo}\n${selectedTicketsInfo}`;
  
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
  odaberiTicket(index: number) {
    this.ticketSelections[index].selected = !this.ticketSelections[index].selected;
  
    localStorage.setItem('ticketSelections', JSON.stringify(this.ticketSelections));
  }

  translateTicketButton(selected: boolean) {
    if (selected) {
      this.translate.get('selected').subscribe((res) => {
        this.ticketButtonLabel = res;
      });
    } else {
      this.translate.get('select').subscribe((res) => {
        this.ticketButtonLabel = res;
      });
    }
  }

  }


