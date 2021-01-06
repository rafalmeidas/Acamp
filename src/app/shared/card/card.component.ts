import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
