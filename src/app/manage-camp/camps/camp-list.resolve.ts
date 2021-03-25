import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CampService } from '../../core/camp/camp.service';
import { Camp } from '../../core/camp/camp';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class CampListResolver implements Resolve<Observable<Camp[]>>{

    constructor(
        private service: CampService
        ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.userCamps().pipe(map(dados => dados));
    }
}