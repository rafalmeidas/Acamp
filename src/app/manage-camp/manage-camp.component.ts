import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manage-camp',
  templateUrl: './manage-camp.component.html',
  styleUrls: ['./manage-camp.component.css']
})
export class ManageCampComponent implements OnInit {

  @Input() campId: number;

  constructor( 
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.campId = this.activatedRoute.snapshot.params.IdCamp;
  }

}
