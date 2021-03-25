import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Component({
  selector: 'ac-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() info: string;

  constructor() { }

  ngOnInit(): void {
    this.url = `${API_URL}${this.url}`;
  }

}
