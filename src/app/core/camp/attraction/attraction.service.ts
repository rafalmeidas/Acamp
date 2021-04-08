import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class AttractionService {

    constructor(
        private http: HttpClient,
    ) { }

    getCategoryAttractions() {
        return this.http.get<Array<any>>(`${API_URL}attractionCategory`).pipe(map(dados => dados));
    }

}