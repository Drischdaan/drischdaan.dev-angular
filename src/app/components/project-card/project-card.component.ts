import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

const MAX_X = 20;
const MAX_Y = 20;

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
