import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../models/menu-item';
import { AppRouterService } from '../../services/app-router.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'left-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  selectedMenu: MenuItem;
  route : String;
  menuMap:{}={};
  _ : MenuComponent = this;
  private router:AppRouterService;
  constructor(router:AppRouterService) {
    this.router = router;
  }

  ngOnInit() {

    this.addMenuItem(new MenuItem('Dashboard','/dashboard','dashboard',false));
    this.addMenuItem(new MenuItem('Manage User', '/manage-user', 'person', false));

    var _ = this;
    this.router.addEventAfterRouteChanged(function(navEnd : NavigationEnd){
      var menuItem = _.menuMap[navEnd.url];
      if(menuItem == null) throw new Error("Menu item is missing");
      console.log(_.menuMap,navEnd);
      if(_.selectedMenu)
      _.selectedMenu.active = false;
      _.selectedMenu = menuItem;
      _.selectedMenu.active = true;
    });
  }

  private addMenuItem(item:MenuItem){
    this.menuMap[item.path.toString()] = item;
    this.menuItems.push(item); 
  }

}
