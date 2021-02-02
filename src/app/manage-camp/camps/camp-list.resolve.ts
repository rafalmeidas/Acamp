import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CampService } from '../../core/camp/camp.service';
import { Camp } from '../../core/camp/camp';
import { UserService } from 'src/app/core/user/user.service';

@Injectable({ providedIn: 'root'})
export class CampListResolver implements Resolve<Observable<Camp[]>>{

    constructor(
        private service: CampService,
        private userService: UserService
        ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userId: number = this.userService.getUserId();
        return this.service.userCamps(userId);
    }
}