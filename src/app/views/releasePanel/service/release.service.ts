import { Injectable } from '@angular/core';
import { RequestApi } from '../../../constant/app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderServices } from '../../../constant/header.config';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  public headers = new HttpHeaders();
  private requestUrl = "";  // URL to web api

  constructor(private http: HttpClient, private header: HeaderServices) { }

  public getReleaseOrderList(reqData): Promise<any> {
    //this.loader.show();
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_RELEASE_ORDER_LIST;
    return this.http
      .post(this.requestUrl, JSON.stringify(reqData), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response })
      .catch(response => {
       return response});
  }

  public verifyReleaseOrder(reqData): Promise<any> {
    //this.loader.show();
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_VERIFY_RO;
    return this.http
      .post(this.requestUrl, JSON.stringify(reqData), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response })
      .catch(response => {
       return response});
  }
}
