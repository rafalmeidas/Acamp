import { Paginate } from '../../paginate/paginate';
import { Attraction } from './attraction';

export interface AttractionPaginate {
    
    attractions: Attraction[];
    paginate: Paginate;
}