import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CampPaginate } from 'src/app/core/camp/camp-paginate';
import { UserCampPaginateService } from 'src/app/core/camp/user-camp.service';
import { CampService } from 'src/app/core/camp/camp.service';

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
    private campService: UserCampPaginateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.campService.listByUser(1).subscribe(res => this.camps = res);
    this.camps = this.activatedRoute.snapshot.data.camps;
    this.paginate = this.camps.paginate;
  }

  //Faz a consulta da página certa
  receiveActualPage(page) {
    this.campService.listByUser(page).subscribe(res => this.camps = res);
  }

  //Consulta
  searchAcampById(id) {
    this.router.navigate(['manage-camps/', id]);
  }

}