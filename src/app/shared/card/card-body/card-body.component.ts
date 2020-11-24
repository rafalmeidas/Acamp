import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card-body',
  templateUrl: './card-body.component.html',
})
export class CardBodyComponent implements OnInit {

  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
