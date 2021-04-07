import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {

  @Input() campId: number;

  constructor(
    router: Router,

  ) { }

  ngOnInit(): void {
  }

}
