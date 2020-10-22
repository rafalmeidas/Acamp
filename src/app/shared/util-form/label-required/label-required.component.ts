import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-label-required',
  templateUrl: './label-required.component.html',
  styleUrls: ['./label-required.component.css']
})
export class LabelRequiredComponent{

  @Input() label: string;
  @Input() name: string;

}
