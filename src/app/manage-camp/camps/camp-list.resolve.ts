import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CampPaginate } from 'src/app/core/camp/camp-paginate';
import { UserCampPaginateService } from 'src/app/core/camp/user-camp.service';

@Injectable({ providedIn: 'root'})
export class CampListResolver implements Resolve<Observable< CampPaginate>>{

    constructor(
        private service: UserCampPaginateService
        ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.listByUser(1).pipe(map(dados => dados));
    }
}