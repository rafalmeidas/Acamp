import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camp } from './camp';

const API_URL: string = 'http://18.230.23.24:3000/';

@Injectable({ providedIn: 'root'})
export class CampService {

    constructor(
        private http: HttpClient
        ){}

    userCamps( idUser: number){
        return this.http.get<Camp[]>(API_URL + 'user/' + idUser +  '/camp');
    }
}