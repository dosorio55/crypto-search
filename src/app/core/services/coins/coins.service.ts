import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoins } from './models/product.models';
import { environment } from 'src/environments/environment';
import { ISimpleCoin } from './models/simpleCoin.models';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private httpClient: HttpClient) {}

  public getCoins(): Observable<ICoins[]>{
    return this.httpClient.get<ICoins[]>(`${environment.apiUrl}coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false`);
  }

  public getCoinById(coinId: string): Observable<ICoins[]>{
    return this.httpClient.get<ICoins[]>(`${environment.apiUrl}coins/markets?vs_currency=usd&ids=${coinId}&sparkline=false`);
  }
}
