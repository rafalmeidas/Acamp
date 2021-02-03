import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Cep } from 'src/app/core/apis/cep/cep';
import { CepService } from 'src/app/core/apis/cep/cep.service';

@Component({
  selector: 'ac-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit, OnChanges ,OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  adrress: Cep = new Cep;

  @Input() cep: string = '';

  constructor(
    private cepService: CepService
  ) { }
  
  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.cep = filter);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes.cep.currentValue){
      this.cepService.searchCEP(this.cep);
    }
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}