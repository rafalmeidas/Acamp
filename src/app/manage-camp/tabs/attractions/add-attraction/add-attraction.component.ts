import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AttractionService } from 'src/app/core/camp/attraction/attraction.service';

@Component({
  selector: 'ac-add-attraction',
  templateUrl: './add-attraction.component.html',
  styleUrls: ['./add-attraction.component.css']
})
export class AddAttractionComponent implements OnInit {

  @Input() campId: number;

  private file: File;

  attractionId: number;
  attractionForm: FormGroup;
  preview: string;
  lista: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private attractionService: AttractionService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.attractionForm = this.formBuilder.group({
      description: [
        '',
        [
          Validators.required
        ]
      ],
      tel: [
        '',
        [
          Validators.required
        ]
      ],
      tel1: [
        '',
        [

        ]
      ],
      info: [
        '',
        [
          Validators.required
        ]
      ],
      attraction_image: [
        '',
        [
          Validators.required
        ]
      ]
    });
    this.attractionService.getCategoryAttractions().subscribe(res => this.lista = res);
    this.attractionId = this.activeRoute.snapshot.params.IdAttraction;
  }

  insert() { }

  getCategoryAttraction(){
    this.attractionService.getCategoryAttractions();
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result; //disponibiliza de forma assincrona o acesso a imagem
    reader.readAsDataURL(file);
  }

  get description() {
    return this.attractionForm.get('description');
  }

  get tel() {
    return this.attractionForm.get('tel');
  }

  get tel1() {
    return this.attractionForm.get('tel1')
  }

  get info() {
    return this.attractionForm.get('info');
  }

  get attraction_image() {
    return this.attractionForm.get('attraction_image');
  }


}
