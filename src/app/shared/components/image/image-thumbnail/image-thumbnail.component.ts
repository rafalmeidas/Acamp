import { Component, OnInit, Input } from '@angular/core';

const ADDRESS = 'http://18.230.23.24:3000/';

@Component({
  selector: 'ac-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.css']
})
export class ImageThumbnailComponent implements OnInit {

  @Input() url: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
    this.url = ADDRESS+this.url;
  }

}