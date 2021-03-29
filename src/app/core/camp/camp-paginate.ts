import { Paginate } from '../paginate/paginate';
import { Camp } from './camp';
export interface CampPaginate {

    camps: Camp[]
    paginate: Paginate;
}