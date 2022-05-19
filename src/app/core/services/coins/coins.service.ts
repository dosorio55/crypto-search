import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoins } from './models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private httpClient: HttpClient) {}

  public getCoins(): Observable<ICoins[]>{
    return this.httpClient.get<ICoins[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false');
  }
}
