import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
    public pendingRequests: number = 0;
    public showLoading: boolean = false;

    constructor(private spinner: NgxSpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.pendingRequests++;
        this.turnOnModal();
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.turnOffModal();
            }
        },
            (err: any) => {
                if (err.status == 401) {
                    console.log('err');
                    this.logout();
                }
                this.turnOffModal();
            }));
    }


    private turnOnModal(): void {
        if (!this.showLoading) {
             this.spinner.show(); //for showing loader for every http request
            this.showLoading = true;
        }
        this.showLoading = true;
    }

    private turnOffModal(): void {
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
            if (this.showLoading) {
                this.spinner.hide();
            }
            this.showLoading = false;
        }
    }

    private logout(): void {
        sessionStorage.removeItem('userData');
        //this.router.navigate(['/home']);
        this.turnOffModal();
    }
}