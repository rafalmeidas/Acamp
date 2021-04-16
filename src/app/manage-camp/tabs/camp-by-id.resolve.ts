import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CampService } from 'src/app/core/camp/camp.service';


import { Camp } from '../../core/camp/camp';

@Injectable({ providedIn: 'root'})
export class CampByIdResolver implements Resolve<Observable<Camp>>{

    constructor(
        private service: CampService
        ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('Aqui');
        
        return this.service.loadByID(route.params.IdCamp);
    }
}