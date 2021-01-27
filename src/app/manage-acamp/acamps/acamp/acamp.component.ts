import { Component, Input, OnInit } from '@angular/core';
import { Camp } from 'src/app/core/camp/camp';
import { CampService } from 'src/app/core/camp/camp.service';

@Component({
  selector: 'ac-acamp',
  templateUrl: './acamp.component.html',
  styleUrls: ['./acamp.component.css']
})
export class AcampComponent implements OnInit {

  @Input() src: string;
  @Input() title: string;
  @Input() info: string;
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
