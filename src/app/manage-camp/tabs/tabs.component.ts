import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ac-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  idCamp: number;

  constructor( private route: ActivatedRoute ) { }

  // Validar se for recaregado a página fazer uma nova consulta com o id passado de parâmetro, caso não exista mandar para o cadastro com a rota 0, validar se isso 
  //será feito ná página ou direto no cadastro realizado

  ngOnInit(): void {
    this.idCamp = this.route.snapshot.params.IdCamp;
    //console.log(this.idCamp);
  }

}
