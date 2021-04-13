import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AttractionPaginate } from 'src/app/core/camp/attraction/attraction-paginate';
import { AttractionService } from 'src/app/core/camp/attraction/attraction.service';

@Component({
  selector: 'ac-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {

  @Input() campId: number;

  attractions: AttractionPaginate;

  constructor(
    //private attractionService: AttractionService
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.attractions = this.activatedRoute.snapshot.data.attraction;
  }


}
