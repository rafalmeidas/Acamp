import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router
        ){}


    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        if(this.userService.isLogged()){
            //Se o usuário está logado ele envia false e bloqueia o acesso a rota, e já envia o usuário para a nova rota user/userName 
            this.router.navigate(['acamps']);
            return false;
        }
        return true;
    }

}