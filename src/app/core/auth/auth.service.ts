import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

const API_URL =  environment.API_URL;

@Injectable({ providedIn: 'root'})
export class AuthService {

    constructor(
        private http: HttpClient,
        private userService: UserService){}

    autenticate( email: string, password: string) {
        return this.http.post( API_URL + 'user/login', {email, password}, {observe: 'response'})
        .pipe(tap( res => {
            const authToken = res.headers.get('Authorization');
            console.log(authToken);
            this.userService.setToken(authToken);
        }));
    }

    logout(){
        return this.http.get( API_URL + 'user/logout');
    }
}