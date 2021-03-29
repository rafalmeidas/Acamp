import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CampService } from '../../core/camp/camp.service';
import { CampPaginate } from 'src/app/core/camp/camp-paginate';

@Injectable({ providedIn: 'root'})
export class CampListResolver implements Resolve<Observable<CampPaginate>>{

    constructor(
        private service: CampService
        ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.userCampsPaginate().pipe(map(dados => dados));
    }
}