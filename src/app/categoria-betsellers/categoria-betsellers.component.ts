import { Component, OnInit } from '@angular/core';
import { Betseller } from '../betseller';
import { BetsellerService } from '../betseller.service';

@Component({
  selector: 'app-categoria-betsellers',
  templateUrl: './categoria-betsellers.component.html',
  styleUrls: ['./categoria-betsellers.component.css']
})
export class CategoriaBetsellersComponent implements OnInit {

  betseller: Betseller [] = [];

  constructor(private betsellerService: BetsellerService ) { }

  ngOnInit() {
    this.getBetseller();
  }

  getBetseller(): void {
    this.betsellerService.getBetsellers()
    .subscribe(betseller => this.betseller = betseller.slice(0, 12));
  }

}
