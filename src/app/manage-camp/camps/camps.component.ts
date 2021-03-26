import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CampService } from 'src/app/core/camp/camp.service';
import { CampPaginate } from 'src/app/core/camp/camp-paginate';
import { updateDate } from 'src/app/shared/validators/input-format/date-format';

@Component({
  selector: 'ac-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit, OnChanges {

  camps: CampPaginate;
  rows: any[] = [];

  private campSubject = new BehaviorSubject<any>(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private campService: CampService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.camps) {
      this.rows = this.groupColomns(this.camps)
    }
  }

  ngOnInit(): void {
    this.camps = this.activatedRoute.snapshot.data.camps;
    this.rows = this.groupColomns(this.camps);
  }

  groupColomns(camps: CampPaginate) {

    const newRows = [];
    
    for (let index = 0; index < camps.camps.length; index += 3) {
      newRows.push(camps.camps.slice(index, index + 3));
    }
    
    return newRows;
  }

  // talvz deixar somente o navigate, consulta pode ser feito no add
  searchAcampById(campId) {
    this.campService.getCampById(campId).subscribe(
      res => {this.router.navigate(['manage-camps/', campId]); 
      console.log(res);
      }
    );
  }

  get acamp() {
    return this.campSubject.asObservable();
  }

}
