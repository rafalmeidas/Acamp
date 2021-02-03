import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Cep } from './cep';

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
    return this.http.get(API_URL + '87509030' + '/json/');
  }

  converterRespostaParaCep(cepNaResposta): Cep {
    let cep = new Cep();
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.complemento = cepNaResposta.complemento;
    cep.bairro = cepNaResposta.bairro;
    cep.localidade = cepNaResposta.localidade;
    cep.uf = cepNaResposta.uf;

    return cep;
  }

}
