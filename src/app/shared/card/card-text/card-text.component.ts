import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card-text',
  templateUrl: './card-text.component.html',
})
export class CardTextComponent implements OnInit {

  @Input() text: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
