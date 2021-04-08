import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {

  @Input() campId: number;

  constructor() { }

  ngOnInit(): void { }
}
