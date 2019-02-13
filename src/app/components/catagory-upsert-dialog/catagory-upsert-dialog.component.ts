import { Component, OnInit, Inject, Injector } from '@angular/core';
import { CatagoryService } from '@services/catagory.service';
import { CatagorySimple } from '@models/catagory';
import { NgForm } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface Parents{
  id:number;
  text:string;
}

@Component({
  selector: 'catagory-create',
  templateUrl: './catagory-upsert-dialog.component.html',
  styleUrls: ['./catagory-upsert-dialog.component.scss']
})
export class CatagoryUpsertDialogComponent extends BaseComponent implements OnInit {

  catagory: CatagorySimple= {};
  

  get title():string{
    return this.catagoryId ? "Edit Catagory" : "Add New";
  };

  get submitText():string{
    return this.catagoryId ? "Save ": "Create new catagory";
  };

  listParent:Parents[]=[];

  constructor(inj:Injector,
              private catagoryService:CatagoryService,
              public dialogRef:MatDialogRef<CatagoryUpsertDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public catagoryId?:string ) {super(inj); }

  ngOnInit() {
    if(this.catagoryId) this.loadCatagory(this.catagoryId);

    this.loadCategoryParent();
  }

  async loadCatagory(id:string){
    this.catagory = await this.process<CatagorySimple>(this.catagoryService.Get(id)) || {};
    
  }

  async loadCategoryParent(){
    this.listParent = await this.process<Parents[]>(this.catagoryService.GetParentCategory()) || [];
  }

  async onSubmit(form:NgForm){
    if(!form.valid) return;
    if(this.inprogress) return;
    if(!this.catagory._id) {
      this.createCatagory(this.catagory);
      return;
      
    }

    this.updateCatagory(this.catagory);

    
  }

   async createCatagory(catagoryData){
     var data = await this.process<CatagorySimple>(this.catagoryService.Create(catagoryData));
     if(!data) return;

     this.showSuccess("Add new Catagory success");
     this.clearCatagoryData();
     this.cancel();
    } 

    async updateCatagory(catagoryData){
      var data = await this.process<CatagorySimple>(this.catagoryService.Update(catagoryData));
      if(!data) return;

      this.showSuccess("Update success");
      this.cancel();
    }

  cancel(){
    this.dialogRef.close();
  }

  clearCatagoryData(){
    this.catagory = {};
  }
}
