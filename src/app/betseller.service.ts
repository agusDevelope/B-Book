import { Injectable } from '@angular/core';
import { Betseller } from './betseller';
import { betsellerList } from './lista-betseller';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetsellerService {

  constructor() { }
  getBetsellers(): Observable<Betseller[]> {
    return of(betsellerList);
  }
  getBetseller(titulo: string): Observable<Betseller> {
    return of(betsellerList.find(betseller => betseller.titulo === titulo));
  }
}
