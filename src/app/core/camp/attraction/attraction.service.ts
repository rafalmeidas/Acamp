import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment'
import { Attraction } from './attraction';
import { CategoryAttraction } from './categoryAttraction';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class AttractionService {

    constructor(
        private http: HttpClient,
    ) { }

    attractionCampPaginate(page = 1, limit = 6) {
        return this.http.get<Attraction[]>(`${API_URL}attraction/1?&page=${page}&limit=${limit}&order=-id`).pipe(map(dados => dados));
    }

    getCategoryAttractions() {
        return this.http.get<Array<CategoryAttraction[]>>(`${API_URL}attractionCategory`).pipe(map(dados => dados));
    }

}