import { Country } from './coutry';
import { Region } from './region';

export interface State {

    id: number;
    name: string;
    cod_uf: number;
    uf: string;
    created_at: string;
    updated_at: string;
    country: Country;
    region: Region;
}