import { Component,Injector } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import {CommonService} from '@services/common.service';




@Component({
  selector: 'app-base-component',
  template:''
})
export class BaseComponent  {
  inprogress:boolean = false;
  notification:NotificationService;
  commonService : CommonService;
  constructor(private injector:Injector){
    this.notification = injector.get(NotificationService);
    this.commonService = injector.get(CommonService);
  }

  async process<T>(promise:Promise<any>) : Promise<T> {
    this.inprogress = true;
    var retVal = await promise;
    await this.commonService.delay(30000);
    this.inprogress = false;
    return retVal;
  }

  showSuccess(tittle:String,message?:String){
    this.notification.success(message,tittle);
  }

}
