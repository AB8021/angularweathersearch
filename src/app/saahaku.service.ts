import { HttpClient } from '@angular/common/http'; // http-olio hakee datan
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // data haetaan asynkronisesti observablena
import { catchError } from 'rxjs/operators'; // virheenkäsittelyä varten

@Injectable({
  providedIn: 'root',
})
export class SaahakuService {
  apiurl1 =
    'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::multipointcoverage&place=';
  apiurl2 = '&timestep=1440&parameters=temperature&';
  apiurl3 = 'T00:00:00Z&&parameters=temperature&';
  // HttpClient-luokasta syntyy http-olio konstruktorissa
  // Tämä on dependency injection
  constructor(private http: HttpClient) {}

  /* Sama homma kuin yllä toteutettuna fetchillä.
  Fetch palauttaa promisen, joka välitetään komponentille.
  Yksinkertaistamisen vuoksi on käytetty Promisessa any-tietotyyppiä.
  Mukana on samantyyppinen virheenkäsittely. Huomaa, että fetch()
  ei toimi in-memory-web-apin kanssa, mutta toimii kun käytetään
  oikeaa serveriä http://localhost:3000/products -osoitteesta.
  */

  async getProductByIDFetch(kaupunki: string): Promise<any> {
    let enddate: String;
    let endday = new Date();
    endday.setDate(endday.getDate() + 1 * 3);
    enddate = endday.toISOString().slice(0, 10);
    const response = await fetch(this.apiurl1 + kaupunki + this.apiurl2);
    let xmltext = await response.text();

    let responseDoc = new DOMParser().parseFromString(xmltext, 'application/xml');
    let saatulos = responseDoc.documentElement.textContent;

    return saatulos;
  }
}
