import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() info: string;
  @Input() update: string;

  constructor() { }

  ngOnInit(): void {
    
  }




}
