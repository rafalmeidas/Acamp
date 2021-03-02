import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cep } from './cep';
import { debounceTime, first, map, switchMap } from 'rxjs/operators'
import { AbstractControl } from '@angular/forms';

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

  checkCepTaken() {
    return (control: AbstractControl) => {
        return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(cep => {
                return this.searchCEP(cep);
            }))//o retorno do cepService é verdadeiro ou falso true:false
            .pipe(map(isTaken => isTaken ? null : { cepTaken: true } ))//isTaken é somente o nome dado para o retorno do pipe anterior
            .pipe(first()); //finaliza o observable e da o retorno
    }
}

}
