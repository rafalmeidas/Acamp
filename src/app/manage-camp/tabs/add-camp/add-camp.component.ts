import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Cep } from 'src/app/core/apis/cep/cep';
import { CepService } from 'src/app/core/apis/cep/cep.service';
import { CampService } from 'src/app/core/camp/camp.service';

@Component({
  selector: 'ac-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  cep: Cep;
  private cityId: number;

  cepInput: string = '';
  campForm: FormGroup;

  constructor(
    private cepService: CepService,
    private campService: CampService,
    private formBuilder: FormBuilder,
    private router: Router
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
        ''
      ],
      'street': [
        ''
      ],
      'number': [
        ''
      ],
      'neighbordhooh': [
        ''
      ],
      'city': [
        ''
      ],
      'uf': [
        ''
      ],
      'complement': [
        ''
      ],
      'camp_image': [
        ''
      ]
    })
      
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  searchCEP(){
    this.cepService.searchCEP(this.campForm.get('cep').value)
        .subscribe( dados => this.insertCEP(dados))
  }

  insertCEP(dados: Cep){
    this.campForm.patchValue({
      street: dados.logradouro,
      neighbordhooh: dados.bairro,
      city: dados.localidade,
      uf: dados.uf,
    });
    this.cityId = dados.ibge;
  }

  insert(){
    const name = this.campForm.get('name').value;
    const initialDate = this.campForm.get('initial_date').value;
    const finalDate = this.campForm.get('final_date').value;
    const minAge = this.campForm.get('min_age').value;
    const info = this.campForm.get('info').value;
    const cep = this.campForm.get('cep').value;
    const street = this.campForm.get('street').value;
    const number = this.campForm.get('number').value;
    const neighbordhooh = this.campForm.get('neighbordhooh').value;
    const complement = this.campForm.get('complement').value;
    const city_id = this.cityId;
    const camp_image = this.campForm.get('camp_image').value;
    this.campService
      .insert(name, initialDate, finalDate, minAge, info, cep, street, number, neighbordhooh, complement, city_id, camp_image)
      .subscribe( () => this.router.navigate(['']));
  }
  
}