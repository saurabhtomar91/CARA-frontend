import { Injectable } from '@angular/core';
import { HeaderServices } from '../../../constant/header.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestApi } from '../../../constant/app.config';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  public headers = new HttpHeaders();
  private requestUrl = "";  // URL to web api

  constructor(private http: HttpClient, private header: HeaderServices) { }

  public getUserList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_USER_LIST;
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

  public getMandiList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_MANDI_LIST;
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

  public getLabAPI(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_LAB_API;
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

  public getProductList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_PRODUCT_LIST;
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

  public getemployee(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_EMPLOYEE_LIST;
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

  public getBankList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_BANK_LIST;
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

  public gettabList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_TAB_LIST;
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

  public getActivityList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_ACTIVITY_LIST;
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

  public getUserAndProductList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_USERANDPRODUCT_LIST;
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

  public getStockDataList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_STOCK_DATA_LIST;
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

  public getCityList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_CITY_LIST;
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

  public updateEmployeeData(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_UPDATE_EMPLOYEE;
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

  public getLabList(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_LAB_LIST;
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

  public getMandiSuperviserList(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_MANDI_SUPERVISOR_LIST;
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

  public getAreaManagerList(): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.GET_RAEA_MANAGER_LIST;
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

  public assignLabToMandi(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_ASSIGN_LAB_TO_MANDI;
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

  public assignMandiToMandiSuperviser(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_MANDI_TO_SUPERVISOR;
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

}
