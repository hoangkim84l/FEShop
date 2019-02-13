import { Component, OnInit } from '@angular/core';
import { CatagorySimple } from '@models/catagory';

@Component({
  selector: 'app-manage-catagory',
  templateUrl: './manage-catagory.component.html',
  styleUrls: ['./manage-catagory.component.scss']
})
export class ManageCatagoryComponent implements OnInit {
  selectedCatagory:CatagorySimple={};
  constructor() { }

  ngOnInit() {
  }

  onSelectedCatagory(catagory:CatagorySimple){
    this.selectedCatagory = catagory;
  }

}
