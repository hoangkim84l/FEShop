import {Component,Injector, OnInit, Input,EventEmitter, Output,Inject} from '@angular/core';
import {UserService} from '@services/user.service';
import {UserSimple} from '@models/user-simple';
import {NgForm } from '@angular/forms'
import {BaseComponent} from '../base/base.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

interface Gender{
  id:number;
  text:string;
}

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent extends BaseComponent implements OnInit {
  

  // @Input() set userId(_id:String){
  //   if(!_id) return;

  //   this.loadUser(_id);
  // };

  // @Output() aUserSubmitted = new EventEmitter<UserSimple>();

  user: UserSimple = {};

  genders:Gender[]= [{id:0,text:"Female"},{id:1,text:"Male"}];

  get title():string{
    return this.userId ? "Edit user": "Create user";
  };

  get submitText():string{
    return this.userId ? "Save user": "Create new user";
  };

  constructor(inj:Injector,
    private userService:UserService,
    public dialogRef:MatDialogRef<UserCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public userId?:string) { super(inj); }

  ngOnInit() {
    if(this.userId) this.loadUser(this.userId);
    
  }

  // onGenderChange(gender:number){
  //   this.user.gender = gender;
  // }

  async loadUser(id:String){
    this.user = await this.process<UserSimple>(this.userService.Get(id)) || {};
  }

 async onSubmit(form:NgForm){
    if(!form.valid) return;
    if(this.inprogress) return;
    if(!this.user._id) {
      this.createUser(this.user);
      return;
    }

    this.updateUser(this.user);
  }

  async createUser(userData){
    var data = await this.process<UserSimple>(this.userService.Create(userData));
    if(!data) return;

    this.showSuccess("Create new user success");
    this.clearUserData();
    //this.aUserSubmitted.emit(data);
  }

  async updateUser(userData){
    var data = await this.process<UserSimple>(this.userService.Update(userData));
    if(!data) return ;

    this.showSuccess("Update user success");
    
  }

  clearUserData(){
    this.user = {};
  }

}
