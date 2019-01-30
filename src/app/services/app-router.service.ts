import { Injectable } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {
  private callbackFunctionsWhenRouteChanged:Function[]=[];

  constructor(router:Router) {
    console.log("AppRouterService called");
    router.events.subscribe((event:Event) => {
      if (event instanceof NavigationEnd ) {
        this.callbackFunctionsWhenRouteChanged.forEach(fn => {
          fn(event);
        });
      }
    });
  }

  addEventAfterRouteChanged(event:Function){
    this.callbackFunctionsWhenRouteChanged.push(event);
  }
}
