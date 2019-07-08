import { Injectable } from '@angular/core';
import { HeaderServices } from '../../../constant/header.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestApi } from '../../../constant/app.config';

@Injectable({
  providedIn: 'root'
})
export class LabServicesService {
  public headers = new HttpHeaders();
  private requestUrl = "";  // URL to web api

  constructor(private http: HttpClient, private header: HeaderServices) { }

  public getproductId(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    //this.requestUrl = RequestApi.GET_PRODUCT_ID;
    return this.http
      .get(this.requestUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response
      })
      .catch(response => {
        return response
      });
  }

}
