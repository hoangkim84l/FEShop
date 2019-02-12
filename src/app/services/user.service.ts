import { Injectable,Injector } from '@angular/core';
import { BaseBackendService } from '@services/base-backend.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends BaseBackendService {
  
  constructor(injector: Injector) { 
    super(injector,'/api/v1/users');
  }

}
