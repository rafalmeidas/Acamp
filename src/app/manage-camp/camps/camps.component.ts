import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camp } from 'src/app/core/camp/camp';

@Component({
  selector: 'ac-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit, OnChanges {

  camps: Camp [] = [];
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
    console.log(this.camps);
    
    this.rows = this.groupColomns(this.camps);
  }

  groupColomns(camps: Camp[]) {
    const newRows = [];

    //Acessa o objeto javascript e monta um novo array com acesso direto (ACABAR COM ISSO)
    var chaves = Object.keys(camps);
    for (var i = 0; i < chaves.length; i++){
      var camp = camps[chaves[i]];
    }

    for (let index = 0; index < camp.length; index += 3) { 
      newRows.push(camp.slice(index, index + 3));
    }
    console.log(newRows);

    return newRows;
  }

}
