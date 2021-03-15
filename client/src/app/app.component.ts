import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {}

  ethEndpoint = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false";
  ethPrize: any

  ngOnInit() {
    this.http.get(this.ethEndpoint).subscribe(res => {
      console.log(res)
      this.ethPrize = res;
      console.log(this.ethPrize.market_data.current_price.usd);
    });
  }



}
