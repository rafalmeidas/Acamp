import { Component, Input, OnInit } from '@angular/core';

import { updateDate } from 'src/app/shared/validators/input-format/date-format';

@Component({
  selector: 'ac-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() info: string;

  private _update: string;
  
  @Input() set update(update: string) {
    this._update = updateDate(update);
  }

  constructor() { }

  ngOnInit(): void {

  }

  get update() {
    return this._update;
  }




}
