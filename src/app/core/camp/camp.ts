import { Local } from '../address/local';
import { Image } from './image';

export interface Camp {

    id: number;
    name: string;
    initial_date: string;
    final_date: string;
    min_age: number;
    info: string;
    cep: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    city_id: number;
    images: Image[];
    local: Local;
    createdAt: string;
    updatedAt: string;
}