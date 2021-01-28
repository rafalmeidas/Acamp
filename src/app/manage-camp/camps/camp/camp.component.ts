import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class AcampComponent implements OnInit {

  @Input() src: string;
  @Input() title: string;
  @Input() info: string;
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
