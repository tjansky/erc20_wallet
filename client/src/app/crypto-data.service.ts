import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICryptocurrency } from './shared/models/Icryptocurrency';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  constructor(private http: HttpClient) { }

  getCoinData(coinId: string){
    return this.http.get<ICryptocurrency>("https://api.coingecko.com/api/v3/coins/"+coinId+"?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false")
  }

}
