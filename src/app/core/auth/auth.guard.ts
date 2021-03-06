import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router
    ){}

    //Caso não esteja logado todas as rotas que usarem esse guard são jogados para a página de login
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        if(!this.userService.isLogged()){
            this.router.navigate(['']);
            return false;
        }
        return true;
    }

}