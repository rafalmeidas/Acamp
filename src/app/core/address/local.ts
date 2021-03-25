import { City } from './city';

export interface Local {

    id: number;
    cep: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    created_at: string;
    updated_at: string;
    city: City;
}