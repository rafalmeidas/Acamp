import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from 'src/app/core/apis/cep/cep';
import { CepService } from 'src/app/core/apis/cep/cep.service';
import { Camp } from 'src/app/core/camp/camp';
import { CampCopiarService } from 'src/app/core/camp/camp-copiar.service';
import { CampService } from 'src/app/core/camp/camp.service';
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
  camp: Camp;
  title: string = 'Preview';

  constructor(
    private cepService: CepService,
    private campService: CampService,
    private campCopiar: CampCopiarService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
    })

    this.searchCampRouteParam();
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

    //Insere o acampamento e manda paa a rota do acampamento, falta fazer um guard para quando editarem a rota voltar para o cadastro de um acampamento do 0
    this.campCopiar
      .insert(name, initialDate, finalDate, minAge, info, cep, street, number, neighborhood, complement, city_id, this.file)
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
    if (this.campId != 0) {
      //console.log(this.activatedRoute.snapshot.params.IdCamp);
      const id = this.activatedRoute.snapshot.params.IdCamp;
      this.campService.loadByID(id).subscribe(res => this.camp = res);
      console.log(this.camp);
      
      //this.camp = this.activatedRoute.snapshot.data.camp;
      if (this.camp) {
        console.log('aqui');
        
        this.preview = this.camp.images[0].path;

        this.campForm.patchValue({
          name: this.camp.name,
          initial_date: addZero(this.camp.initial_date),
          final_date: addZero(this.camp.final_date),
          min_age: this.camp.min_age,
          info: this.camp.info,
          cep: this.camp.local.cep,
          street: this.camp.local.street,
          number: this.camp.local.number,
          neighborhood: this.camp.local.neighborhood,
          city: this.camp.local.city.name,
          uf: this.camp.local.city.state.name,
          complement: this.camp.local.complement
        });
      }
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