import { Injectable } from '@angular/core';
import { HeaderServices } from '../../../constant/header.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestApi } from '../../../constant/app.config';

@Injectable({
  providedIn: 'root'
})
export class CifService {
  // getCityList(data: any): any {
  //   throw new Error("Method not implemented.");
  // }
  public headers = new HttpHeaders();
  private requestUrl = "";  // URL to web api

  constructor(private http: HttpClient, private header: HeaderServices) { }

  public getCifList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_CIF_LIST;
    return this.http
      .post(this.requestUrl, JSON.stringify(reqData), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response
      })
      .catch(response => {
        return response
      });
  }

  public getNewCifNumber(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_NEW_CIF;
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

  public getAllUnit(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_ALL_UNIT;
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

  public getAllProduct(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_ALL_PRODUCT;
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

  public getAllMandi(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_ALL_MANDI;
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

  public getStateList(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_STATE_LIST;
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

  public getBankList(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_BANK_LIST;
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

  public addNewUSer(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_NEW_USER;
    return this.http
      .post(this.requestUrl, JSON.stringify(reqData), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response
      })
      .catch(response => {
        return response
      });
  }

  public userByName(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_USER_BY_NAME;
    return this.http
      .post(this.requestUrl, JSON.stringify(reqData), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response
      })
      .catch(response => {
        return response
      });
  }

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

  public MandiId(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    //this.requestUrl = RequestApi.GET_MANDI_ID;
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

  public MarketProductId(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    //this.requestUrl = RequestApi.GET_MARKET_PRODUCT_ID ;
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
