import { Injectable } from '@angular/core';
import {ToastrService , ToastrModule} from 'ngx-toastr';
//https://www.npmjs.com/package/ngx-toastr
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private toastr:ToastrService ){

  }

  error(msg, tit){
    setTimeout(() => this.toastr.error(msg,tit));
  }
  
  success(msg, tit){
    setTimeout(() => this.toastr.success(msg,tit));
  }
}

export const NotificationModule = ToastrModule.forRoot({
  maxOpened :3,
  preventDuplicates: true,
});