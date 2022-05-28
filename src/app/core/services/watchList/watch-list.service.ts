import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiCoins, ICoins, IPostResponse } from '../models/product.models';
import { IWatchLlist } from '../models/watchList.models';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor(private httpClient: HttpClient) { }

  public getWatchProducts(): Observable<IWatchLlist[]>{
    return this.httpClient.get<IWatchLlist[]>(`${environment.mongoAtlas}coins`)
  }
  
  public getWatchCoinById(idCoin: string): Observable<IWatchLlist> {
    return this.httpClient.get<IWatchLlist>(`${environment.mongoAtlas}coins/${idCoin}`);
  }

  public addCoinToWatchlist(body: IWatchLlist): Observable<IPostResponse>{
    return this.httpClient.post<IPostResponse>(`${environment.mongoAtlas}coins`,
    body
    )
  }

  public deleteWCoin(idCoin: string): Observable<IWatchLlist>{
    return this.httpClient.delete<IWatchLlist>(`${environment.mongoAtlas}coins/${idCoin}`)
  }

  public editCoin(idCoin: string, body: IWatchLlist): Observable<IPostResponse>{
    return this.httpClient.put<IPostResponse>(`${environment.mongoAtlas}coins/${idCoin}`,
    body
    )
  }

  // public updrateWatchlist(){

  // }

}
