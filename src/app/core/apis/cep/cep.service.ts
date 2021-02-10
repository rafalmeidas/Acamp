import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from './cep';
import { map } from 'rxjs/operators'

const API_URL = 'https://viacep.com.br/ws/';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  resultado:Cep;

  constructor(
    private http: HttpClient
  ) { }
  
  searchCEP(cep: string){

    if(cep != ''){

      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)){
        return this.http.get<Cep>(API_URL + cep + '/json/')
        .pipe( map(dados => dados))  
      }
    }
  }

}
