import { State } from './state';

export interface City {

    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    state: State;
}