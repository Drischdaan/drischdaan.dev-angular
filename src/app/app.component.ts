import { Component } from '@angular/core';
import { INavigationItem } from './components/navigation-bar/models/navigation-bar.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navigationItems: INavigationItem[] = [
    {
      id: 'home',
      name: 'Home',
    },
    {
      id: 'about',
      name: 'About',
    },
    {
      id: 'projects',
      name: 'Projects',
    },
    {
      id: 'contact',
      name: 'Contact',
    },
  ];

}