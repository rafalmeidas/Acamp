import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CampService } from 'src/app/core/camp/camp.service';
import { CampPaginate } from 'src/app/core/camp/camp-paginate';

@Component({
  selector: 'ac-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit {

  camps: CampPaginate;
  paginate: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private campService: CampService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.camps = this.activatedRoute.snapshot.data.camps;
    this.paginate = this.camps.paginate;
  }

  //Faz a consulta da página certa
  receiveActualPage(page) {
    this.campService.userCampsPaginate(page).subscribe(res => this.camps = res);
  }

  //Consulta
  searchAcampById(id) {
    this.campService.getCampById(id).subscribe(
      res => {
        this.router.navigate(['manage-camps/', id]);
      }
    );
  }

}