import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { INavigationItem } from './models/navigation-bar.models';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Input() items: INavigationItem[] = [];

  mobileMenuOpen$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private readonly router: Router
  ) { }

  public onMobileMenuClicked(value: boolean): void {
    this.mobileMenuOpen$.next(value);
  }

  public onNavigationItemClicked(id: string): void {
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(['/'], { fragment: id }).finally(() => {
      this.router.onSameUrlNavigation = "ignore";
    });
  }

}
