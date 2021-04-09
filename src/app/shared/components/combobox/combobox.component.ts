import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent implements OnInit {

  @Input() lista: Array<any>[] = [];
  @Input() idComponente: number;

  constructor() { }

  ngOnInit(): void {
  }

}
