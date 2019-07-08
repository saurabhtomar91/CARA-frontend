import { Injectable } from '@angular/core';
import { LocalStorageService } from './localStorage.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HeaderServices {
    protected userDetails: any;
    private isUserLogin: boolean = false;
    
    constructor(private localStorage: LocalStorageService,
        public auth: AuthService,
        private router: Router) {
        this.isUserLogin = this.auth.isLoggednIn();
        if (!this.isUserLogin) {
            this.router.navigate(['/login']);
        }
    }

    headerWithAuthorization(): any {
        if (this.isUserLogin) {
            return { 'Content-Type': 'application/json','authToken': this.auth.getToken()};
        }
        else {
            this.router.navigate(['/login']);
        }
    }

    onlyHeader(): any {
        return { 'Content-Type': 'application/json' };
    }

    headerForFormData(): any {
        if (this.isUserLogin) {
            return {'authToken': this.auth.getToken()};
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}