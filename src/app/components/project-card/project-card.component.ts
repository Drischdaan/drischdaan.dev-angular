import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';

  constructor() { }

}
