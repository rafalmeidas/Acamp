import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    //Um Observable que é utilizado para emitir um valor que pode ser passado/acesivel para quem fizer o subscribe
    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
        //verifica se tem o token se tiver executa o método de decodificar o token e emitir
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    //seta o token no storage do navegador
    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    //retorna um observable, o qual possibilita fazer o subscribe e acessar dados
    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User; //aqui a chamada jwt_decode
        this.userName = user.username;
        this.userSubject.next(user); //emitindo os dados após a conversão do token, pode ser acesado no método getUser()
    }

    logout(){
        this.tokenService.removeToken();
        //Emite um valor para o usuário vazio
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    getUserName(): string {
        return this.userName;
    }
}