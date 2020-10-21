import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/tokenService';

const API_URL: string = 'http://localhost:3000/';

@Injectable({ providedIn: 'root'})
export class AuthService {

    constructor(
        private http: HttpClient,
        private tokenService: TokenService){}

    autenticate( email: string, password: string) {
        return this.http.post( API_URL + 'user/login', {email, password}, {observe: 'response'})
        .pipe(tap( res => {
            const authToken = res.headers.get('Authorization');
            console.log(authToken);
            this.tokenService.setToken(authToken);
        }));
    }
}