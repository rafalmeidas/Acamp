import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ac-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnChanges {

  @Input() dados: any[] = [];
  @Output() idClicked = new EventEmitter();

  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.dados) {
      this.rows = this.groupColomns(this.dados);
    }
  }

  groupColomns(arrayAny: any[]) {

    const newRows = [];

    for (let index = 0; index < arrayAny.length; index += 3) {
      newRows.push(arrayAny.slice(index, index + 3));
    }

    return newRows;
  }

  // retorna o id do card clicado
  EmmitId(id) {
    this.idClicked.emit(id);
  }

}
