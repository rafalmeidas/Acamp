import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Camp } from '../core/camp/camp';
import { CampService } from '../core/camp/camp.service';

@Component({
  selector: 'ac-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnChanges{

  @Input()
  camps: Camp[] = [];
  rows: any[] = [];

  constructor(
    private campService: CampService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.camps) {
      this.rows = this.groupColomns(this.camps);
    }
  }

  groupColomns(camps: Camp[]) {

    const newRows = [];

    for (let index = 0; index < camps.length; index += 3) {
      newRows.push(camps.slice(index, index + 3));
    }
    
    return newRows;
  }

  searchAcampById(campId) {
    this.campService.getCampById(campId).subscribe(
      res => {
        this.router.navigate(['manage-camps/', campId]);
      }
    );
  }

}
