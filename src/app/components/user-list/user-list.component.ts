import { Component,Injector, OnInit, EventEmitter, Output,ViewChild } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserSimple} from '@models/user-simple';
import {BaseComponent} from '../base/base.component';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UserCreateComponent} from '../user-create/user-create.component';

interface User{
  _id?:string;
  email?:string;
  fullName?:string;
  userType?:string;
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseComponent implements OnInit {
  title:string= "Manage user";
  displayedColumns: string[] = ['email', 'fullName', 'userType','lastModified'];
  userDataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);
  multiSelectMode = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(injector:Injector,
    private userService:UserService,
    public dialog: MatDialog) {super(injector) }

  ngOnInit() {
    this.loadUsers(); 
  }

  async loadUsers(){
    this.userDataSource = new MatTableDataSource(await this.process<User[]>(this.userService.All()));
    this.userDataSource.paginator = this.paginator;
  }

  pickupUser(user:User){
    if(!this.multiSelectMode){
      this.selection.clear();
      this.selection.toggle(user);

      const dialogRef = this.dialog.open(UserCreateComponent, {
        width: '550px',
        data: user._id,
        autoFocus: false,
        disableClose:true,
      });

      dialogRef.addPanelClass("no-padding");
      return;
    }

  }


}
