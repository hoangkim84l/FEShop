import { Component,
   OnInit,
   Input,
   Output,
   EventEmitter} from '@angular/core';
import { Choice } from '@models/choice';


// [groupName]="'gender'" 
// [choices]="choices" 
// [multiLine]="'true'"
// [selectedId]="'0'"

@Component({
  selector: 'single-choice',
  styleUrls: ['./single-choice.component.scss'],
  template : `
    <label for="{{groupName}}-{{i}}" class="sc-choice {{multiLine ? 'mul-line' : ''}}" *ngFor="let choice of choices;let i = index"  >
      <input id="{{groupName}}-{{i}}" 
              name="{{groupName}}"
              type="radio"  
              [value]="choice.id" 
              [(ngModel)]="selectedId" 
              (ngModelChange)="choose($event)"/>
      <i></i>
      <span>{{choice.text}}</span> 
    </label>
  `
})
export class SingleChoiceComponent implements OnInit {
  _selectedId?:any;
  @Input() choices:Choice[]=[];
  @Input() groupName:String;
  @Input() multiLine:Boolean;
  @Input() selectedId:String;
  @Output() onChangedSelectedId = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}


  choose(val?:any){
    this.onChangedSelectedId.emit(val);
  };


}
