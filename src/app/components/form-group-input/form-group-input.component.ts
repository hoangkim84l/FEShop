import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'form-group-input',
  styleUrls: ['./form-group-input.component.scss'],
  template:`
  <div class="form-group bmd-form-group">
    <label>{{label}}</label>
    <ng-content></ng-content>
  </div> 
  `
})
export class FormGroupInputComponent implements OnInit {
  @Input() label?:String;
  constructor() { }

  ngOnInit() {
  }

}
