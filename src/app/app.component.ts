import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'loppu';
  saas = [{ kunta: '', lampo: '' }];
  addItem(paikkarray: Array<string>) {
    this.saas.push({ kunta: paikkarray[0], lampo: paikkarray[1] + 'C' });
  }
}
