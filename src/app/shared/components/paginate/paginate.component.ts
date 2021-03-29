import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ac-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  @Input() first: string;
  @Input() last: string;
  @Input() self: string;
  @Input() next: string;
  @Input() totalPages: number;
  @Input() page: number;

  //Comunicação de componente filho com pai, valor emitido no OnInit
  @Output() actualPage = new EventEmitter();

  qtdePages: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.contPages(this.totalPages);
  }

  contPages(pages: number) {
    let i = 0;
    while (pages > i) {
      this.qtdePages.push(i + 1);
      i++;
    }
  }

  clickPage(page) {
    this.page = page;
    this.actualPage.emit(page);
    window.scroll(0, 0);
  }

  jumpFirstPage() {
    this.page = 1
    this.actualPage.emit(this.page);
  }

  jumpLastPage() {
    let lastPage = [...this.qtdePages].pop();
    this.page = lastPage;
    this.actualPage.emit(lastPage);
  }

  jumpPreviousPage() {
    this.page = this.page - 1
    this.actualPage.emit(this.page);
  }

  jumpNextPage() {
    this.page = this.page + 1
    this.actualPage.emit(this.page);
  }

}
