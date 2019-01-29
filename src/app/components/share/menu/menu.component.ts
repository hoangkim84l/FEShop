import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

class MenuItem {
  public name:String;
  public path:String;
  public icon:String;
  public active:Boolean;

  constructor(name: String, path: String, icon: String, active: Boolean) { 
    this.name = name;
    this.path = path;
    this.icon = icon;
    this.active = active;
  }

  public getActiveString(){
    return this.active ? 'active' :''; 
  };
}

export class MenuComponent implements OnInit {
  menus: MenuItem[] = [];
  selectedMenu: MenuItem;
  constructor() { }

  ngOnInit() {
    // this.menus.push(new MenuItem('Dashboard','/dahboard','dashboard',true)); 
    // this.menus.push(new MenuItem('Manage User', '/manage-user', 'profile', true)); 
  }

  // onSelect(menuItem: MenuItem): void {
  //   this.selectedMenu.active = false;
  //   this.selectedMenu = menuItem;
  //   this.selectedMenu.active = true;
  // }

}
