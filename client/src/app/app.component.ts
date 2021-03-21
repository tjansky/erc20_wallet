import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICryptocurrency } from './shared/models/Icryptocurrency';
import { CryptoDataService } from './crypto-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  addedCryproCoins$: Observable<ICryptocurrency>

  constructor(private http: HttpClient, private cryptoDataService: CryptoDataService) {}

  ethEndpoint = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false";
  etherCurrency: ICryptocurrency;

  // TODO: maybe use idea with initialLiked, so we save resources
  likedCoinsString: string[] = ['ethereum', 'bitcoin'];
  likedCoins: ICryptocurrency[] = [];
  inputCoin: string;

  ngOnInit() {
    this.getDataForLikedCoins();
  }


  getDataForLikedCoins(){
    this.likedCoinsString.forEach(c => {
      this.cryptoDataService.getCoinData(c).subscribe(tokenData => {
        // populate array of coins that is rendered on page
        this.likedCoins.push(tokenData);
      });
    });
  }

  onAddLikedCoin(){
    this.likedCoinsString.push(this.inputCoin);
    // set array to empty for we call get all coins data so we dont end up with duplicates
    this.likedCoins = [];
    this.getDataForLikedCoins();
  }



}
