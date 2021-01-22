import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-image-fluid',
  templateUrl: './image-fluid.component.html',
  styleUrls: ['./image-fluid.component.css']
})
export class ImageFluidComponent implements OnInit {

  @Input() url: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}