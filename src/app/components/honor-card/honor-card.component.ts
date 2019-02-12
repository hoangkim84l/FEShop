import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'honor-card',
  styleUrls: ['./honor-card.component.scss'],
  template:`
  <mat-card>
    <mat-card-content>
    <mat-progress-bar *ngIf="inprogress"
        [color]="'warn'"
        [mode]="'indeterminate'"
        [value]="'0'">
    </mat-progress-bar>
      <ng-content></ng-content>
    </mat-card-content>
  </mat-card> 
  `
})
export class HonorCardComponent implements OnInit {
  @Input() inprogress:boolean = false;
  // @Input() title:string = 'Card title';
  // @Input() noPadding:boolean = false;
  constructor() { }

  ngOnInit() {}

}
