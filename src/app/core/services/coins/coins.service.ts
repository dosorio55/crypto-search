import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IApiCoins, ICoins } from '../models/product.models';
import { environment } from 'src/environments/environment';
import { IPrices } from '../models/prices-date.models';
import { transformProduct } from '../models/coins.transformer';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private httpClient: HttpClient) { }

  public getCoins(): Observable<ICoins[]> {
    return this.httpClient.get<IApiCoins[]>(`${environment.apiUrl}coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .pipe(map(res => transformProduct(res)
      )
      )
  }

  public getCoinById(coinId: string): Observable<ICoins[]> {
    return this.httpClient.get<ICoins[]>(`${environment.apiUrl}coins/markets?vs_currency=usd&ids=${coinId}&sparkline=false`);
  }

  public getMarketRange(coinId: string, daysRange: number): Observable<IPrices> {
    return this.httpClient.get<IPrices>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${daysRange}`)
  }

}