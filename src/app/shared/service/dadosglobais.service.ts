import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'
import Ticker from '../models/ticker';

@Injectable({
  providedIn: 'root'
})
export class DadosglobaisService {

  private readonly URL_DADOS_GLOBAIS : string = `${environment.API}`

  constructor(private http: HttpClient) {}

  obterResumoNegociacoes(moeda : string){
    return this.http.get<Ticker>(`${this.URL_DADOS_GLOBAIS}/${moeda}/ticker`)
    .pipe(tap(console.log));
  }

}
