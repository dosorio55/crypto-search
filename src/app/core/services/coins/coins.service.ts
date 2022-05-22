import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IApiCoins, ICoins } from '../models/product.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private httpClient: HttpClient) { }

  public getCoins(): Observable<ICoins[]> {
    return this.httpClient.get<IApiCoins[]>(`${environment.apiUrl}coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false`)
      .pipe(map(res => res.map(mapedCoins => ({
        id: mapedCoins.id,
        name: mapedCoins.name,
        symbol: mapedCoins.symbol,
        current_price: mapedCoins.current_price,
        market_cap: mapedCoins.market_cap,
        price_change_percentage_24h: mapedCoins.price_change_percentage_24h,
        image: mapedCoins.image,
        favorite: false
      }))
      )
      )
  }

  public getCoinById(coinId: string): Observable<ICoins[]> {
    return this.httpClient.get<ICoins[]>(`${environment.apiUrl}coins/markets?vs_currency=usd&ids=${coinId}&sparkline=false`);
  }

}

// id: mapedCoins.id,
// name: mapedCoins.name,
// symbol: mapedCoins.symbol,
// current_price: mapedCoins.current_price,
// market_cap: mapedCoins.market_cap,
// price_change_percentage_24h: mapedCoins.price_change_percentage_24h,
// image: mapedCoins.image