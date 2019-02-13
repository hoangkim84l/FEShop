import { Injectable,Injector } from '@angular/core';
import { BaseBackendService } from '@services/base-backend.service';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService extends BaseBackendService{

  constructor(injector: Injector) {
    super(injector,'/api/v1/catagories');
  }

  async GetParentCategory<T>(){
    var _ = this;
    return await this.http
                    .get<T>(this.url('/api/v1/catagories/parentCategory'))
                    .toPromise()
                    .catch(function(errRes: any){_.handleError(errRes.error,_.notification)}); 
  }

}
