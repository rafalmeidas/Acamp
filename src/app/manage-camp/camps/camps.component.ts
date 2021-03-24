import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Camp } from 'src/app/core/camp/camp';
import { CampService } from 'src/app/core/camp/camp.service';

@Component({
  selector: 'ac-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit, OnChanges {

  camps: Camp[] = [];
  rows: any[] = [];
  //camps$: Observable<Camp>;
  private campSubject = new BehaviorSubject<any>(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private campService: CampService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.camps) {
      this.rows = this.groupColomns(this.camps)
      //console.log(this.rows);
    }
  }

  ngOnInit(): void {
    this.camps = this.activatedRoute.snapshot.data.camps;
    //console.log(this.camps);
    this.rows = this.groupColomns(this.camps);
  }

  groupColomns(camps: Camp[]) {
    const newRows = [];

    //Acessa o objeto javascript e monta um novo array com acesso direto (ACABAR COM ISSO)
    var chaves = Object.keys(camps);
    for (var i = 0; i < chaves.length; i++) {
      var camp = camps[chaves[i]];
    }

    for (let index = 0; index < camp.length; index += 3) {
      newRows.push(camp.slice(index, index + 3));
    }
    console.log(newRows);

    return newRows;
  }

  // talvz deixar somente o navigate, consulta pode ser feito no add
  searchAcampById(campId) {
    this.campService.getCampById(campId).subscribe(
      res => {this.router.navigate(['manage-camps/', campId]); console.log(res);
      }
    );
  }

  get acamp() {
    return this.campSubject.asObservable();
  }
}
