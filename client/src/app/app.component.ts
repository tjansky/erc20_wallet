import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICryptocurrency } from './models/Icryptocurrency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {}

  ethEndpoint = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false";
  etherCurrency: ICryptocurrency;

  ngOnInit() {
    this.http.get<ICryptocurrency>(this.ethEndpoint).subscribe(res => {
      //console.log(res)
      this.etherCurrency = res;
      console.log(this.etherCurrency.name, this.etherCurrency.market_data.current_price.usd + '$');
      //console.log(this.etherCurrency.market_data.current_price.usd);
      //console.log(this.etherCurrency.market_data.current_price.eur);
    });
  }



}
