import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

    //======= GEt all results success data 
    public arrangePaginationData(code, data): any {
      var updatedData = {};
      if (code == 200 && data.docs.length) {
        // check data length 
        if (data.docs.length) { // if length not equal to 0
          updatedData['list'] = data.docs; // store all result list
          updatedData['currentPage'] = parseInt(data.page); //GEt current page Number
          if (data.page == 1) {
            updatedData['prev'] = true;
            updatedData['from'] = 1;
          }
          else {
            updatedData['prev'] = false;
            updatedData['from'] = (parseInt(data.page) - 1) * 15 + 1;
          }
          updatedData['next'] = data.page == data.pages ? true : false;
          updatedData['to'] = data.page == data.pages ? data.total : parseInt(data.page) * 15;
          updatedData['total'] = data.total;
        }
        else { //if length equal to 0
          updatedData['prev'] = true;
          updatedData['next'] = true;
        }
      }
      else {
        updatedData = {
          list: []
          , currentPage: 1
          , prev: true
          , next: true
          , to: 0
          , from: 0
          , total: 0
        }
      }
      return updatedData;
    }
  
    public getPageNumber(flag, updatedData): any {
      var page;
      if (flag == 'prev') {
        // decrease the current page number
        page = updatedData['currentPage'] - 1;
      }
      if (flag == 'next') {
        // Increase the current page number
        page = updatedData['currentPage'] + 1;
      }
      return page;
    }
  
    public sortData = (key, data) => {
      data.sort(function (a, b) {
        return b[key] - a[key]
      });
      return data;
    }
}
