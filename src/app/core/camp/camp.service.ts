import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';
import { Camp } from './camp';

const API_URL = environment.API_URL

@Injectable({ providedIn: 'root' })
export class CampService {

    private campSubject = new BehaviorSubject<any>(null);

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    // Retorna todos os acampamentos do usuário logado
    userCamps() {
        return this.http.get<Camp[]>(API_URL + 'user/' + this.userService.getUserId() + '/camp?include=true');
    }

    // Retorna o acampamento pelo id, utilizado quando clica-se em um acampamento
    getCampById(campId: number) {
        return this.http.get<Camp>(`${API_URL}user/${this.userService.getUserId()}/camp/${campId}`);  
    }

    // Cadastra o acampamento
    insert(name, initial_date, final_date, min_age, info, cep, street, number, neighborhood, complement, city_id, camp_image) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('initial_date', initial_date);
        formData.append('final_date', final_date);
        formData.append('min_age', min_age);
        formData.append('info', info);
        formData.append('cep', cep);
        formData.append('street', street);
        formData.append('number', number);
        formData.append('neighborhood', neighborhood);
        formData.append('complement', complement);
        formData.append('city_id', city_id);
        formData.append('camp_image', camp_image);

        // formData.append('allowComments', allowComments ? 'true' : 'false');
        return this.http.post<Camp>(API_URL + 'camp', formData);
    }

    getCamp(idCamp: number){
        const dados: any = this.getCampById(idCamp)
        console.log(dados);
        this.campSubject.next(dados);
        console.log(this.campSubject);
        
        return this.campSubject.asObservable();
    }

}