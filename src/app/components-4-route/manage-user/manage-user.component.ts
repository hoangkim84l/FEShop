import { Component, OnInit } from '@angular/core';
import { UserSimple } from '@models/user-simple';


@Component({
  selector: 'app-manage-user',
  styleUrls: ['./manage-user.component.scss'],
  templateUrl: './manage-user.component.html',
})
export class ManageUserComponent implements OnInit {
  selectedUser:UserSimple ={}; 
  constructor() {}

  ngOnInit() {}

  onSelectedUser(user:UserSimple){
    this.selectedUser = user;
  }

  aUserSubmitted(user:UserSimple){
    console.log(user);
  }

}
