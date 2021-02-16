import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Camp } from './camp';

const API_URL =  environment.API_URL

@Injectable({ providedIn: 'root'})
export class CampService {

    constructor(
        private http: HttpClient
        ){}

    userCamps( idUser: number){
        return this.http.get<Camp[]>(API_URL + 'user/' + idUser +  '/camp?include=true');
    }

    insert (name, initial_date, final_date, min_age, info, street, number, neighbordhooh, complement, city_id, camp_image){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('initial_date', initial_date);
        formData.append('final_date', final_date);
        formData.append('min_age', min_age);
        formData.append('info', info);
        formData.append('street', street);
        formData.append('number', number);
        formData.append('neighbordhooh', neighbordhooh);
        formData.append('complement', complement);
        formData.append('complement', city_id);
        formData.append('camp_image', camp_image);
        // formData.append('allowComments', allowComments ? 'true' : 'false');
        return this.http.post(API_URL + 'camp', formData);
    }

    // "name": "Acampamento Relaxe Mais",
    //  "initial_date": "2021-02-14T01:47:57.576Z",
    //  "final_date": "2021-02-25T01:47:57.576Z",
    //  "min_age": 25,
    //  "info": "Este acamapamento é para vc que não guenta mais trabalhar 7 dias  12 horas por semana",
    //  "cep": "12322000",
    //  "street": "Rua imaculada conceição",
    //  "number": 684,
    //  "neighbordhooh": "Parque 30 de Fevereiro",
    //  "complement": "Um pouco acima do parque 31 de Fevereiro",
    //  "city_id": 324654,
    //  "camp_image":
}