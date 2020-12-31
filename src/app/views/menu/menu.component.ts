import { Component, OnInit } from '@angular/core';
import Ticker from 'src/app/shared/models/ticker';
import { DadosglobaisService } from 'src/app/shared/service/dadosglobais.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ticker: Ticker;   

  constructor(
    private dadosGlobaisService: DadosglobaisService,
  ){
    
  }
  
  ngOnInit(){
    this.ticker = new Ticker();
    this.dadosGlobaisService.obterResumoNegociacoes('BTC')
    .subscribe(ticker => {
      this.ticker = ticker;
      console.log(this.ticker);
    });

  }

}
