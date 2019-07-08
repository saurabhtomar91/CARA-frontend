import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
import { SuperAdminService } from '../../superAdminPanel/services/super-admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit {

  public searchValue: string = '';
  data: any = {};
  //public initialPageNumber: number = 1;
  value = false;
  public listType: boolean = false;
  public updatedData: any;
  public mandiList: any;
  public userList: any;
  public productList: any;
  public form: any = {};
  emptyListMsg: string;
  public selectUndefinedOptionValue:any;
  //default: string = 'Select warehouse';
  
  constructor(private service: SuperAdminService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList();
  }

  // Get stock-data list
  public inItList() {
    this.service.getAllMandi()
      .then(result => {
        if (result.responseCode === 200) {
          this.mandiList = this.common.sortData(result.responseCode, result.result);
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })
  }

  setValue(userList, productList): void {
    this.userList = userList;
    this.productList = productList;
  }

  public callApi = () => {
    this.service.getUserAndProductList(this.form)
      .then(result => {
        result.responseCode == 200 ? this.setValue(result.result[0].user, result.result[0].product) : this.setValue([], []);
      })
  }


  public getProductAndUserList = () => {
    this.form['mandiId'] ? this.callApi() : this.setValue([], [])
  }


  public stockData() {

    this.service.getStockDataList(this.form)
      .then(result => {
        if (result.responseCode === 200) {
          this.updatedData = this.common.sortData(result.responseCode, result.result);
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })
  }
}
