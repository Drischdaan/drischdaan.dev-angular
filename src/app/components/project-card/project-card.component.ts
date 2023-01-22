import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  card: ElementRef = new ElementRef('card');

  constructor() { }

  ngOnInit(): void {
    console.log(this.card);
  }

}
