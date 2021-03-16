import { Component, Input, OnInit } from '@angular/core';
import { ICryptocurrency } from '../../models/Icryptocurrency';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit {
  @Input() cryptoCurrency: ICryptocurrency;

  constructor() { }

  ngOnInit(): void {
  }

}
