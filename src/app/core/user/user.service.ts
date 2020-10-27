import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL: string = 'http://localhost:3000/';

@Injectable({ providedIn: 'root'})
export class UserService {

    constructor(
        private http: HttpClient
    ){}

}