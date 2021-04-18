import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { CrudService } from '../crud/crud.service';
import { Camp } from './camp';
import { CampPaginate } from './camp-paginate';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class UserCampPaginateService extends CrudService<CampPaginate>{

    constructor(
        http: HttpClient
    ) {
        super(http, `${API_URL}user/camp`);
    }
}

@Injectable({ providedIn: 'root' })
export class UserCampService extends CrudService<Camp>{

    constructor(
        http: HttpClient
    ) {
        super(http, `${API_URL}user/camp`);
    }
}