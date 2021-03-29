import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Component({
  selector: 'ac-image-fluid',
  templateUrl: './image-fluid.component.html',
  styleUrls: ['./image-fluid.component.css']
})
export class ImageFluidComponent implements OnInit {

  private _url = '';

  @Input() description: string;

  @Input() set url(url: string) {
    if (!url.startsWith('data')) { 
      this._url = `${API_URL}${url}`; //concatena o caminho com o nome da imagem para exibir
    } else {
      this._url = url;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  get url() { 
    return this._url;
  }
}