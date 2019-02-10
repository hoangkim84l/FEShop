import { Injectable,Injector } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotificationService } from '@services/notification.service';
@Injectable({
  providedIn: 'root'
})
export class BaseBackendService {
  http : HttpClient;
  notification:NotificationService;
  //@ts-ignore 
  apiDomain : String = environment.apiDomain; 
  defaultApiPath:String = '';
  
  constructor(private _injector:Injector,_defaultApiPath:String) {
      this.http = _injector.get(HttpClient);
      this.notification = _injector.get(NotificationService);

    this.defaultApiPath = _defaultApiPath;
  }

  url(apiPath?:String){
    apiPath = apiPath || this.defaultApiPath;
    return `${this.apiDomain}${apiPath}`;
  }

  async All<T>(apiPath?:String){
    var _ = this;
    return await this.http
                    .get<T[]>(this.url(apiPath))
                    //.pipe(retry(2))
                    .toPromise()
                    .catch(function(errRes: any){_.handleError(errRes.error,_.notification)}); 
  }

  async Get<T>(id:String,apiPath?:String){
    var _ = this;
    return await this.http
                    .get<T>(`${this.url(apiPath)}/${id}`)
                    .toPromise()
                    .catch(function(errRes: any){_.handleError(errRes.error,_.notification)}); 
  }

  async Create<T>(e:any,apiPath?:String){
    var _ = this;
    return await this.http
                    .post<T>(this.url(apiPath),e)
                    .toPromise()
                    .catch(function(errRes: any){_.handleError(errRes.error,_.notification)}); 
  }

  async Update<T>(e:any,apiPath?:String){
    var _ = this;
    return await this.http
                    .put<T>(this.url(apiPath),e)
                    .toPromise()
                    .catch(function(errRes: any){_.handleError(errRes.error,_.notification)}); 
  }

  async handleError(err: any,notification:NotificationService) {
    notification.error(err.description,err.error);
    // if (error.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error.message);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   console.error(
    //     `Backend returned code ${error.status}, ` +
    //     `body was: ${error.error}`);
    // }
    // // return an observable with a user-facing error message
    // return throwError(
    //   'Something bad happened; please try again later.');
  };
}
