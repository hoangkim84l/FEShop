import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'left-menu',
  styleUrls: ['./menu.component.scss'],
  template:`
    <div class="menu-container" >
      <ng-container *ngFor="let menuItem of menuItems">
        <nav>
          <a routerLinkActive="active" class="nav-link" mat-button routerLink="{{menuItem.path}}"><i class="material-icons md-18">{{menuItem.icon}}</i>{{menuItem.name}}</a>
        </nav>
        <mat-divider></mat-divider> 
      </ng-container>
    </div>  
  `
})

export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  constructor() {}

  ngOnInit() {
    this.menuItems.push({name:'Dashboard',path:'/dashboard',icon:'dashboard'});
    this.menuItems.push({name:'Manage User',path:'/manage-user',icon:'person'});
  }

}

