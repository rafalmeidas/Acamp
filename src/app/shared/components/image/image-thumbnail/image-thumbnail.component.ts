import { Component, OnInit, Input } from '@angular/core';

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

  }

}