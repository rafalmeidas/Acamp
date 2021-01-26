import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camp } from './camp';

const API_URL: string = 'https://acamp.herokuapp.com/';

@Injectable({ providedIn: 'root'})
export class CampService {

    constructor(
        private http: HttpClient
        ){}

    userCamps(){
        return this.http.get<Camp>(API_URL + 'camp');
    }
}