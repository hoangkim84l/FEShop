import { Component, OnInit } from '@angular/core';
import { AppRouterService } from '../../services/app-router.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(router:AppRouterService) { }

  ngOnInit() {
    
  }

}
