import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Cep } from 'src/app/core/apis/cep/cep';
import { CepService } from 'src/app/core/apis/cep/cep.service';

@Component({
  selector: 'ac-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  cep: Cep;

  cepInput: string = '';
  campForm: FormGroup;

  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.campForm = this.formBuilder.group({
      'name': [
        ''
      ],
      'initial_date': [
        ''
      ],
      'final_date': [
        ''
      ],
      'min_age': [
        ''
      ],
      'info': [
        ''
      ],
      'cep': [
        '87509030'
      ],
      'street': [
        ''
      ],
      'number': [
        ''
      ],
      'neighborhood': [
        ''
      ],
      'complement': [
        ''
      ]/*,
      'city_id': [
        ''
      ],
      'images': [
        ''
      ]*/
    })
      
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  searchCEP(){
    // //console.log(this.campForm.get('cep').value);
    this.cepService.searchCEP(this.campForm.get('cep').value)
        .subscribe( dados => console.log(dados))
  }
  
}