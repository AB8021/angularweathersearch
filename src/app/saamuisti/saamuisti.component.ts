import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saamuisti',
  templateUrl: './saamuisti.component.html',
  styleUrls: ['./saamuisti.component.css'],
})
export class SaamuistiComponent implements OnInit {
  constructor() {}
  @Input() saapaikat = [{ kunta: '', lampo: '' }];

  ngOnInit(): void {
    console.log(this.saapaikat);
  }
}
