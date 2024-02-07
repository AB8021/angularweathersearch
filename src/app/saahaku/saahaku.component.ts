/*
Pieni demosovellus on tehty app-komponenttiin, mikä
on yleensä huono käytänne, sillä app-komponentin tulisi
toimia vain muiden komponenttien säiliönä. Nyt voidaan
kuitenkin tehdä näin, koska kyseessä on vain pieni demo.

Komponentin luokka on Controller tai ViewModel. Se välittää
datan Viewiin eli HTML-templaattin. Se myös tuottaa Viewin
Modelin eli tuottaa muuttujien arvot, jotka on bindattu
Viewiin.
*/

import { Component, Output, EventEmitter } from '@angular/core';
import { SaahakuService } from '../saahaku.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-saahaku',
  templateUrl: './saahaku.component.html',
  styleUrls: ['./saahaku.component.css'],
})
export class SaahakuComponent {
  kuntaNimi: string = '';
  productPrice: string | undefined;
  saatila: string | undefined;
  place: Array<string> | undefined;
  huomisensaa: string = '';
  @Output() newItemEvent = new EventEmitter<Array<string>>();
  // injektoidaan service konstruktorin kautta
  constructor(private SaahakuService: SaahakuService) {}

  /* Komponentin metodi on saman niminen kuin servicen metodi.
     Sitä kutsutaan HTML-templaatissa */

  /* Sama homma fetchillä. Tämä ei toimi kuin oikean palvelimen 
  kanssa, sillä in-memory-web-apissa ei ole fetch()-tukea. 
  Mutta toimii ang-httpservice-server -koeserverillä portista localhost:3000 */
  getProductByIDFetch(formValue: { productID: string }) {
    /* haetaan tuote servicen getProductByIDFetch -metodin avulla
       metodi palauttaa promisen,joka suoritetaan then-metodilla,jonka
       argumenttina on anonyymi funktio josta saadaan data. */
    this.SaahakuService.getProductByIDFetch(formValue.productID).then((response) => {
      response = response.replace(/\s/g, ',').replace(/,,+/g, ',');
      response = response.split(',');
      this.kuntaNimi = response[6];
      let paikka = response.indexOf('Linear') - 1;
      this.huomisensaa = response[paikka];
      this.addNewItem(this.kuntaNimi, this.huomisensaa);
    });
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  addNewItem(paikkakunta: string, lampotila: string) {
    this.newItemEvent.emit([paikkakunta, lampotila]);
  }
}
