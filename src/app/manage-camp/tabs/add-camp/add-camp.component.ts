import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Cep } from 'src/app/core/apis/cep/cep';
import { CepService } from 'src/app/core/apis/cep/cep.service';
import { CampService } from 'src/app/core/camp/camp.service';
import { Validacoes } from 'src/app/shared/validators/validacoes.validator';

@Component({
  selector: 'ac-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  cep: Cep;
  private cityId: number;
  private camp_image: File;

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
        '',
        [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
      'initial_date': [
        '',
        [
          Validators.required,
          Validacoes.CurrentDate
        ],
        
      ],
      'final_date': [
        '',
        [
          Validators.required,
        ]
      ],
      'min_age': [
        '',
        [
          Validators.required,
        ]
      ],
      'info': [
        '',
        [
          Validators.required,
          Validators.maxLength(80)
        ]
      ],
      'cep': [
        '',
        [
          Validators.required,
        ]
      ],
      'street': [
        ''
      ],
      'number': [
        '',
        [
          Validators.required,
        ]
      ],
      'neighborhood': [
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
        '',
        [
          Validators.required,
        ]
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
      neighborhood: dados.bairro,
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
    const neighborhood = this.campForm.get('neighborhood').value;
    const complement = this.campForm.get('complement').value;
    const city_id = this.cityId;
    console.log(this.camp_image);
    
    this.campService
      .insert(name, initialDate, finalDate, minAge, info, cep, street, number, neighborhood, complement, city_id, this.camp_image)
      .subscribe( () => this.router.navigate(['/camps']));
  }

  handleFile(file: File){
    this.camp_image = file;
    //const reader = new FileReader();
    //reader.onload = (event: any) => this.preview = event.target.result; //disponibiliza de forma assincrona o acesso a imagem
    //reader.readAsDataURL(file);
  }

  get name(){
    return this.campForm.get('name');
  }

  get initial_date(){
    return this.campForm.get('initial_date');
  }
  
}