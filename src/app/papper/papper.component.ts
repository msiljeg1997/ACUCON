import { Component } from '@angular/core';

@Component({
  selector: 'app-papper',
  templateUrl: './papper.component.html',
  styleUrls: ['./papper.component.scss']
})
export class PapperComponent {



  downloadDoc() {
    const link = document.createElement('a');
    link.download = 'Croatian Congress of Acupuncture - T&C.docx';
    link.href = 'assets/Croatian Congress of Acupuncture - T&C.docx';
    link.click();
  }
}
