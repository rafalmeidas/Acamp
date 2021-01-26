import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.tokenService.hasToken()){
            const token = this.tokenService.getToken();
            //obrigátorio clonar a requisição, para que façamos as modificações e reenviemos a requsição
            req = req.clone({
                setHeaders: {
                    'Authorization': 'bearer ' + token //bearer coisa do Leandro \o/
                }
            });
        }
        return next.handle(req);
    }
}