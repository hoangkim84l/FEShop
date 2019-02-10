import {ErrorHandler,Injectable,Injector,Inject,NgZone} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
class GlobalErrorHandler implements ErrorHandler{

    constructor(@Inject(NgZone) private ngZone: NgZone, @Inject(Injector) private injector: Injector) { }

    private get toastr(): ToastrService {
        return this.injector.get(ToastrService);
    }

    handleError(error:any){       
        this.ngZone.run(() => {
            console.log(error);
            let errorTitle = 'Error';
            let errMsg = 'An unexpected error ocurred';
            this.toastr.error(errMsg,errorTitle);
        });
    }
}

export const ErrorHandlerProvider = {
    provide : ErrorHandler,
    useClass: GlobalErrorHandler
}

