import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ac-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {


  @Input() campId: number;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }
    
  ngOnInit(): void {
    this.campId = this.activatedRoute.snapshot.params.IdCamp;
  }

  changeCampId (campId){
    this.campId = campId;
  }

}
