import { Component, Input } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'menu-item',
  styleUrls:['menu-item.component.scss'],
  template:`
    <nav>
      <a routerLinkActive="active" class="nav-link" mat-button routerLink="{{menuItem.path}}"><i class="material-icons md-18">{{menuItem.icon}}</i>{{menuItem.name}}</a>
    </nav>
    <mat-divider></mat-divider> 
  `
})
export class MenuItemComponent {
  @Input() menuItem: MenuItem;

  constructor() {  }
}
