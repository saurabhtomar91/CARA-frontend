import { Injectable } from '@angular/core';
import { HeaderServices } from '../../../constant/header.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestApi } from '../../../constant/app.config';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  public headers = new HttpHeaders();
  private requestUrl = "";  // URL to web api

  constructor(private http: HttpClient, private header: HeaderServices) { }

  public getSurveyList(reqData): Promise<any> {
    this.headers = this.header.headerWithAuthorization();
    this.requestUrl = RequestApi.POST_SURVEY_LIST;
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
