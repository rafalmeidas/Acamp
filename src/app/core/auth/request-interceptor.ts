import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { TokenService } from '../token/token.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.tokenService.hasToken()) {
            // Checo se a URL padrão da API tem alguma parte dela na requisição executada
            if (!req.url.indexOf(API_URL)) {
                const token = this.tokenService.getToken();
                // Obrigátorio clonar a requisição, para que façamos as modificações e reenviemos a requsição, pois não é possível editar diretamente a requisição
                req = req.clone({
                    setHeaders: {
                        'Authorization': 'bearer ' + token //bearer coisa do Leandro \o/
                    }
                });
            }
            return next.handle(req);
        }
    }
}