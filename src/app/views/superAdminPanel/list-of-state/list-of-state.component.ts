import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
import { SuperAdminService } from '../../superAdminPanel/services/super-admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-of-state',
  templateUrl: './list-of-state.component.html',
  styleUrls: ['./list-of-state.component.scss']
})
export class ListOfStateComponent implements OnInit {

  public searchValue: string = '';
  data: any = {};
  //public initialPageNumber: number = 1;
  value = false;
  public listType: boolean = false;
  public updatedData: any;
  public stateList: any;
  public cityList: any;
  //public productList: any;
  public stateform: any = {};
  public cityform: any = {};
  emptyListMsg: string;
  public selectUndefinedOptionValue: any;

  constructor(private service: SuperAdminService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList();
  }

  // Get State-City list
  public inItList() {
    this.service.getStateList()
      .then(result => {
        if (result.responseCode === 200) {
          this.stateList = this.common.sortData(result.responseCode, result.result);
          //this.StateList.unshift({ "stateName": "State" ,"gst":"GSTIN" });
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })
  }

  setValue(stateList): void {
    this.stateList = stateList;
  }

  public getCityList() {
    if (this.stateform['stateId']) {
      var reqObj = {
        stateId: this.stateform.stateId,
        type: 'GET'
      };
      this.cityActivity(reqObj);
    } else {
      this.cityList = [];
      this.emptyListMsg = 'List empty.'
    }
  }



  public cityActivity = (data) => {
    this.service.getCityList(data)
      .then(result => {
        if (result.responseCode === 200) {
          if (data.type == 'ADD') {
            //$("#cityModal").modal('hide');
            var reqObj = {
              stateId: this.stateform.stateId,
              type: 'GET'
            };
            //cityActivity(reqObj);
            this.cityform = {};
          } else if (data.type == 'GET') {
            this.emptyListMsg = result.responseMessage;
            this.cityList = result.result;
          } else if (data.type == 'UPDATE' || data.type == 'DELETE') {
            //$('#openDeleteModal').modal('hide');
            //$('#openEditCityModal').modal('hide');
            // var reqObj = {
            //   stateId: $scope.stateform.stateId,
            //   type: 'GET'
            // };
            // cityActivity(reqObj);
          } else if (data.type == 'addGSTIN') {

            // $("#gstinModal").modal('hide');
            // toastr.success(objS.data.responseMessage);
          }
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })
  }
  // public prevAndNext(flag, value) {
  //   if (value == false) {
  //     var page = this.common.getPageNumber(flag, this.updatedData);
  //     this.inItList(this.searchValue, page);
  //   }
  // }

  // public onSearchChange(searchText) {
  //   if (searchText.length >= 3) {
  //     this.searchValue = searchText;
  //     this.inItList(this.searchValue);
  //   } else {
  //     if(searchText.length == 0){
  //       this.inItList(this.searchValue);
  //     }
  //   }
  // }

  // public onStatusSelectionChange(status): void {
  //   this.listType = status;
  //   this.inItList(this.searchValue,1);
  // }

  // public clearSearch(): void {
  //   this.searchValue = '';
  //   this.inItList(this.searchValue,1);
  // }

}
