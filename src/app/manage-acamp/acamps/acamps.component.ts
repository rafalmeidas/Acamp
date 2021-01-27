import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camp } from 'src/app/core/camp/camp';
import { CampService } from 'src/app/core/camp/camp.service';

@Component({
  selector: 'ac-acamps',
  templateUrl: './acamps.component.html',
  styleUrls: ['./acamps.component.css']
})
export class AcampsComponent implements OnInit, OnChanges {

  camps: Camp[] = [];
  rows: any[] = [];
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private campService: CampService
  ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.camps){
      this.rows = this.groupColomns(this.camps)
      console.log(this.rows);
    }
  }

  ngOnInit(): void {
    this.camps = this.activatedRoute.snapshot.data.camps;
    this.rows = this.groupColomns(this.camps);
  }

  groupColomns(camps: Camp[]) {
    const newRows = [];

    for (let index = 0; index < camps.length; index += 3) {
      newRows.push(camps.slice(index, index + 3));
    }
    return newRows;
  }

}
