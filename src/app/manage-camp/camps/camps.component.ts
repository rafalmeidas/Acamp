import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camp } from 'src/app/core/camp/camp';

@Component({
  selector: 'ac-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit, OnChanges {

  camps: Camp[] = [];
  rows: any[] = [];
  

  constructor(
    private activatedRoute: ActivatedRoute,
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
