import { Component, OnInit } from '@angular/core';
import { APIServis } from '../api.service';
import { iRadionice } from '../models/radionice';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Accordion } from 'primeng/accordion';


@Component({
  selector: 'app-radionice',
  templateUrl: './radionice.component.html',
  styleUrls: ['./radionice.component.scss']
})

export class RadioniceComponent implements OnInit {
  @ViewChild('accordion') accordion?: Accordion;
  radionice: iRadionice[] = [];
  activeTabIndex: number | null = null;

  constructor(
    private radioniceService: APIServis,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams['cardIndex'] !== undefined) {
        const cardIndexToOpen = Number(queryParams['cardIndex']); 
        this.openAccordionTab(cardIndexToOpen);
      }
    });
  
this.loadRadionice();
  }

  openAccordionTab(cardIndexToOpen: number) {
    this.activeTabIndex = cardIndexToOpen;
  }


  loadRadionice() {
    this.radioniceService.getRadionice(this.translate.currentLang).subscribe(
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
