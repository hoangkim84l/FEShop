import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { 
  HttpInterceptor, 
  HttpRequest, 
  HttpHandler, 
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HonorInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    req = req.clone({
      setHeaders : {
        Authorization : `Bearer `
      }
    });

    return next.handle(req);

  }
}


export const HttpInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass: HonorInterceptorService,
    multi: true
} 
