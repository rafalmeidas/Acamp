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
}