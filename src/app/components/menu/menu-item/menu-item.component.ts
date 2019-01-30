import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../models/menu-item';
@Component({
  selector: 'menu-item',
  template: `<li class="nav-item {{menuItem.active ? 'active' : ''}}">
        <a class="nav-link" routerLink="{{menuItem.path}}">
          <i class="material-icons">{{menuItem.icon}}</i>
          <p>{{menuItem.name}}</p>
        </a>
      </li>`,
})
export class MenuItemComponent {
  @Input() menuItem: MenuItem;

  constructor() {  }
}
