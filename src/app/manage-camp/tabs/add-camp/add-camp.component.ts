import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from 'src/app/core/apis/cep/cep';
import { CepService } from 'src/app/core/apis/cep/cep.service';
import { Camp } from 'src/app/core/camp/camp';
import { CampCopiarService } from 'src/app/core/camp/camp-copiar.service';
import { CampService } from 'src/app/core/camp/camp.service';
import { UserCampService } from 'src/app/core/camp/user-camp.service';

import { addZero } from 'src/app/shared/validators/input-format/date-format';
import { Validacoes } from 'src/app/shared/validators/validacoes.validator';

@Component({
  selector: 'ac-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit {


  private cityId: number;
  private file: File;

  @Input() campId: number;
  @Output() campIdTab: EventEmitter<number> = new EventEmitter();

  cepInput: string = '';
  campForm: FormGroup;
  preview: string;
  private campa: Camp;
  title: string = 'Preview';

  constructor(
    private cepService: CepService,
    private userCampService: UserCampService,
    private campCopiar: CampCopiarService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.searchCampRouteParam();

    this.campForm = this.formBuilder.group({
      'name': [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
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
          Validacoes.CurrentDate
        ]
      ],
      'min_age': [
        '',
        [
          Validators.required,
          Validators.max(130)
        ]
      ],
      'info': [
        '',
        [
          Validators.required,
          Validators.maxLength(250)
        ]
      ],
      'cep': [
        '',
        [
          Validators.required,
        ],
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
        "",
        [
          Validators.required
        ]
      ],
      'file': [
        ""
      ]
    });
  }

  searchCEP() {
    if ((this.campForm.get('cep').value).length == 8) {
      this.cepService.searchCEP(this.campForm.get('cep').value)
        .subscribe(dados => this.insertCEP(dados))
    }
  }

  insertCEP(dados: Cep) {
    this.campForm.patchValue({
      street: dados.logradouro,
      neighborhood: dados.bairro,
      city: dados.localidade,
      uf: dados.uf
    });
    this.cityId = dados.ibge;
  }

  insert() {

    let name = this.campForm.get('name').value;
    let initial_date = this.campForm.get('initial_date').value;
    let final_date = this.campForm.get('final_date').value;
    let min_age = this.campForm.get('min_age').value;
    let info = this.campForm.get('info').value;
    let cep = this.campForm.get('cep').value;
    let street = this.campForm.get('street').value;
    let number = this.campForm.get('number').value;
    let neighborhood = this.campForm.get('neighborhood').value;
    let complement = this.campForm.get('complement').value;

    let formData: Camp;
    formData.name = name;
    formData.initial_date = initial_date;
    formData.final_date = final_date;
    formData.min_age = min_age;
    formData.info = info;
    formData.cep = cep;
    formData.street = street;
    formData.number = number;
    formData.neighborhood = neighborhood;
    formData.complement = complement;
    formData.city_id = this.cityId;
    formData.camp_image = this.file;

    console.log(formData);
    
    //Insere o acampamento e manda paa a rota do acampamento, falta fazer um guard para quando editarem a rota voltar para o cadastro de um acampamento do 0
    this.userCampService
      .save(formData)
      .subscribe(res => {
        const camp: any = res;
        this.campId = camp.camp.id;
        this.campIdTab.emit(this.campId);
        this.router.navigate(['manage-camps/', camp.camp.id])
      });
    /*
    * Pensando.....
    * E se ao cadastrar a primera aba do acampamento ele mover direto para atrações? 
    * E manter as abas bloqueadas enquanto não tiver um registro do acampameto...?
    */
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result; //disponibiliza de forma assincrona o acesso a imagem
    reader.readAsDataURL(file);
  }

  searchCampRouteParam() {

    const id = this.activatedRoute.snapshot.params.IdCamp;
    if (id != 0) {
      this.userCampService.loadByID(id).subscribe(res => {
        this.preview = res.images[0].path;
        this.campForm.patchValue({
          name: res.name,
          initial_date: addZero(res.initial_date),
          final_date: addZero(res.final_date),
          min_age: res.min_age,
          info: res.info,
          cep: res.local.cep,
          street: res.local.street,
          number: res.local.number,
          neighborhood: res.local.neighborhood,
          city: res.local.city.name,
          uf: res.local.city.state.name,
          complement: res.local.complement
        });
      });
    }
  }

  get name() {
    return this.campForm.get('name');
  }

  get initial_date() {
    return this.campForm.get('initial_date');
  }

  get final_date() {
    return this.campForm.get('final_date');
  }

  get min_age() {
    return this.campForm.get('min_age');
  }

  get info() {
    return this.campForm.get('info');
  }

  get cep() {
    return this.campForm.get('cep');
  }

  get street() {
    return this.campForm.get('street');
  }

  get number() {
    return this.campForm.get('number');
  }

  get neighborhood() {
    return this.campForm.get('neighborhood');
  }

  get complement() {
    return this.campForm.get('complement');
  }

  get camp_image() {
    return this.campForm.get('camp_image');
  }

}