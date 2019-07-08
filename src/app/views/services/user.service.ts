import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { RequestApi } from '../../constant/app.config';
import { HeaderServices } from '../../constant/header.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headers = new HttpHeaders();
  private requestUrl = "";  // URL to web api

  constructor(private http: HttpClient, private header: HeaderServices) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  public loginUser(value): Promise<any> {
    this.headers = this.header.onlyHeader();
    this.requestUrl = RequestApi.POST_USER_LOGIN;
    return this.http
      .post(this.requestUrl, JSON.stringify(value), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response })
      .catch(response => response);
  }

  public verifyOtp(value): Promise<any> {
    this.headers = this.header.onlyHeader();
    this.requestUrl = RequestApi.POST_USER_VERIFY_OTP;
    return this.http
      .post(this.requestUrl, JSON.stringify(value), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response })
      .catch(response => response);
  }

  public resendOtp(value,deviceType): Promise<any> {
    this.headers = this.header.onlyHeader();
    if(deviceType == 'mobile'){
      this.requestUrl = RequestApi.POST_USER_RESEND_OTP;
    }else{
      this.requestUrl = RequestApi.POST_USER_EMAIL_OTP;
    }
    
    return this.http
      .post(this.requestUrl, JSON.stringify(value), { headers: this.headers })
      .toPromise()
      .then(response => {
         return response
         })
      .catch(response => response);
  }
}
