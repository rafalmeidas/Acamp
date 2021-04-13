import { Paginate } from '../../paginate/paginate';

export interface Attraction {

    id: number;
    description: string;
    info: string;
    tel: string;
    tel_2: string;
    cat_attractions_id: number;
    createdAt: Date;
    updatedAt: Date;
    camp_id: number;
}