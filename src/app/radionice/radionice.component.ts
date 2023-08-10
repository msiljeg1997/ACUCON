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
        if (response.status === 'OK' && response.msg === 'request_success') {
          this.radionice = response.data;
        } else {
          console.error('API response indicates an error:', response);
        }
      },
      error => {
        console.error('Error fetching radionice:', error);
      }
    );
  }
}
