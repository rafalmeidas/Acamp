import { Component, OnInit } from '@angular/core';
import { Camp } from 'src/app/core/camp/camp';
import { CampService } from 'src/app/core/camp/camp.service';

@Component({
  selector: 'ac-acamps',
  templateUrl: './acamps.component.html',
  styleUrls: ['./acamps.component.css']
})
export class AcampsComponent implements OnInit {

  camp: Camp[] = [];
  
  constructor(
    private campService: CampService
  ) { }

  ngOnInit(): void {
    this.campService.userCamps()
          .subscribe(
            camps => this.camp.push(camps)
    ) 
    console.log(this.camp);
  }

}
