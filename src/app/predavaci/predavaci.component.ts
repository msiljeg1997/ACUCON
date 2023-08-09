import { Component, OnInit } from '@angular/core';
import { Predavaci } from '../models/predavaci';
import { PredavaciService } from '../api.service';


@Component({
  selector: 'app-predavaci',
  templateUrl: './predavaci.component.html',
  styleUrls: ['./predavaci.component.scss']
})
export class PredavaciComponent implements OnInit {
  participants: Predavaci[] = [];

  constructor(private predavaciService: PredavaciService) { }

  ngOnInit(): void {
    this.predavaciService.getPredavaci().subscribe(data => {
      this.participants = data.filter(participant => participant.disabled !== true);
    });
  }
}
