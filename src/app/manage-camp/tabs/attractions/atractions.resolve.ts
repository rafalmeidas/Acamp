import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Attraction } from 'src/app/core/camp/attraction/attraction';
import { AttractionService } from 'src/app/core/camp/attraction/attraction.service';

@Injectable({ providedIn: 'root'})
export class AttractionResolver implements Resolve<Observable<Attraction[]>>{

    constructor(
        private service: AttractionService 
        ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.attractionCampPaginate();
    }
}