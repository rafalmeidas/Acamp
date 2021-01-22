import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL: string = 'https://acamp.herokuapp.com/';

@Injectable({ providedIn: 'root'})
export class CampService {

    constructor(
        private http: HttpClient
        ){}

    camps(){
        return this.http.get(API_URL + '/camp')
    }
}