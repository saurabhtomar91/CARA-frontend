import { Component, OnInit } from '@angular/core';

import { CifService } from '../services/cif.service';
import { CommonService } from '../../services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public searchValue: string = '';
  data: any = {};
  //public initialPageNumber: number = 1;
  value = false;
  //public listType: string = 'PENDING';
  public updatedData: any;
  emptyListMsg: string;
  public mandiList: any;
  public userList: any;
  public unitList: any;
  public bankList: any;
  public productList: any;
  public form: any;
  public selectUndefinedOptionValue: any;
  public stateList: any;
  public cityList: any;
  public stateform: any = {};
  public cityform: any = {};
  //default: string = 'Select warehouse';
  public vehicleForm: any = {};
  public stackForm: any = {};
  public vehicleList: any = [];
  public stackList: any = [];
  public userForm: any = {};
  public search: any = {};
  public branchList: any = [];
  public userDataObj: any;
  public listType: boolean = false;
  public searchUserList: any = {};
  public cifForm: any = {
    sameWarehouseTransaction: false,
    stack: {}
  };
  public otherForm = {
    sameWarehouseTransaction: false
  };
  public sameWarehouseTransaction = false;
  public totalWeight = 0;
  public weightOfEmpty = 0;
  public grossWeight = 0;
  public numberOfBags = 0;



  constructor(private service: CifService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList();
  }

  public inItList() {
    this.service.getStateList()
      .then(result => {
        if (result.responseCode === 200) {
          this.stateList = this.common.sortData(result.responseCode, result.result);
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })

    this.service.getAllMandi()
      .then(result => {
        if (result.responseCode === 200) {
          this.mandiList = this.common.sortData(result.responseCode, result.result);
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })

    this.service.getNewCifNumber()
      .then(result => {
        if (result.responseCode === 200) {
          this.cifForm['cifNumber'] = "CGR/" + result.result.cifNumber;
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })

    this.service.getAllUnit()
      .then(result => {
        if (result.responseCode === 200) {
          this.unitList = this.common.sortData(result.responseCode, result.result);
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })

    this.service.getAllProduct()
      .then(result => {
        if (result.responseCode === 200) {
          this.productList = this.common.sortData(result.responseCode, result.result);
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })

    //@ Get all bank list
    this.service.getBankList()
      .then(result => {
        if (result.responseCode === 200) {
          this.bankList = this.common.sortData(result.responseCode, result.result);
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })
  }

  //@ select warehouse Id

  public selectWareHouse(data: any): void {
    let parseData = JSON.parse(JSON.stringify(data));
    this.cifForm['mandiId'] = parseData.mandiId;
    this.cifForm['warehouseId'] = parseData.warehouseId;
  }

  public saveUser(): void {
    this.userDataObj = {
      name: this.userForm.name
      , "address.line1": this.userForm.address
      , userType: this.userForm.userType
    };
    this.userDataObj['phoneNumber'] = this.userForm.phoneNumber;
    if (this.userForm.phoneNumber) {
      if (this.userForm['state'] || this.userForm['number']) {
        if (!this.userForm['number']) {
          this.toastr.error('Enter GST number');
        } else if (!this.userForm['state']) {
          this.toastr.error('Select State');
        } else {
          this.userDataObj['gstin'] = [{
            number: this.userForm['number']
            , state: this.userForm['state']
          }]
          this.addNewUserFun();
        }
      }
      else {
        this.addNewUserFun();
      }
    } else {
      this.addNewUserFun();
    }
  }

  public addNewUserFun(): void {
    this.service.addNewUSer(this.userDataObj).then(result => {
      if (result.responseCode === 200) {
        var msg = result.responseMessage + " , user code is : " + result.result.uniqueId;
        this.toastr.success(msg);
        //$('#adduserModel').modal('hide');
        this.userForm = {};
      }
      else {
        this.toastr.error(result.responseMessage, "");
      }
    })
  }


  public getBranchList(bankId): void {
    if (bankId) {
      this.bankList.forEach((val) => {
        if (val._id === bankId) {
          this.branchList = val.branchList;
        }
      })
    }
  }

  // Get list
  public userByName(name) {
    var reqObj = { name };
    // if (searchValue) {
    //   reqObj['searchValue'] = searchValue;
    // }
    this.service.userByName(reqObj)
      .then(result => {
        if (result.responseCode === 200) {
          this.searchUserList = result.result;
          //this.toastr.success(result.responseMessage);
          if (this.updatedData == 0) {
            this.emptyListMsg = reqObj['name'] ? 'No data matched your search.' : 'List empty.'
          }
        }
        else {
          this.searchUserList = [];
        }
      })
  }

  public onSearchChange(searchText) {
    if (searchText.length >= 3) {
      this.searchValue = searchText;
      this.userByName(this.searchValue);
    } else {
      if (searchText.length == 0) {
        this.userByName(this.searchValue);
      }
      // return;
    }
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.userByName(this.searchValue);
  }

  public toggleCheckBox(): void {
    this.resetAllCount();
    var cwfQuantity = 0;
    this.sameWarehouseTransaction = this.otherForm.sameWarehouseTransaction;
    this.cifForm.sameWarehouseTransaction = this.sameWarehouseTransaction;
  }

  public resetAllCount() {
    var standardWeightPerBag = 0;
    var numberOfBag = 0;

  }

  // public saveData(): void {
  //         if (this.cifForm.insurance['insuranceBy'] == 'CGRCML') {
  //         this.cifForm.insurance['companyName'] = 'National Insurance Company Limited.'
  //         //this.cifForm.insurance['list'] = dataService.ensuranceList;
  //     }
  // }
}



// $scope.saveData = () => {
//   if ($scope.cifForm['userId'] && $scope.cifForm['phoneNumber']) {
//      if($scope.cifForm.wrPrice < $scope.price.start || $scope.cifForm.wrPrice >$scope.price.end){
//        toastr.error(`Price must  be between ${$scope.price.start} to ${$scope.price.end}`)
//      }else{
//       $scope.cifForm['stackList'] = $scope.stackList;
//       $scope.cifForm['status'] = "NEW";
//       $scope.cifForm['quantity'] = (0 || $scope.grossWeight * 10 || $scope.cwfQuantity);
//       if ($scope.cifForm['quantity']) {
//           $scope.cifForm['quantity'] = $scope.cifForm['quantity'].toFixed(3);
//       }
//       else {
//           $scope.cifForm['quantity'] = 0;
//       }
//       $scope.cifForm['totalBags'] = $scope.numberOfBags || $scope.numberOfBag;
//       // default fields
//       $scope.cifForm['deletedByUser'] = false;
//       $scope.cifForm['deletedByAdmin'] = false;
//       $scope.cifForm['verifyByLabHead'] = false;
//       $scope.cifForm['rentHistory'] = [];
//       $scope.cifForm['countRentDayWeek'] = false;
//       $scope.cifForm['verifyByOperationHead'] = false;
//       $scope.cifForm['sellerPrice'] = $scope.cifForm['wrPrice'];

//       if ($scope.cifForm.insurance['insuranceBy'] == 'CGRCML') {
//           $scope.cifForm.insurance['companyName'] = 'National Insurance Company Limited.'
//           $scope.cifForm.insurance['list'] = dataService.ensuranceList;
//       }

//       if ($scope.sameWarehouseTransaction == false) {
//           $scope.vehicleList.forEach((val) => {
//               val.totalWeight = val.totalWeight.toFixed(3);
//               val.weightOfEmpty = val.weightOfEmpty.toFixed(3);
//           })
//           $scope.cifForm['vehicleList'] = $scope.vehicleList;
//       }
//       if($scope.cifForm['userType']=='TRADER'){
//          if($scope.cifForm['bagCharge']){
//             delete $scope.cifForm['bagCharge'];
//          }
//          if($scope.cifForm['cleaningCharge']){
//             delete $scope.cifForm['cleaningCharge'];
//          }
//       }
//       employeeService.addNewData($scope.cifForm).then((objS) => {
//           if (objS.data.responseCode == 200) {
//               toastr.success(objS.data.responseMessage);
//               $state.go('header.cifList');
//           }
//       })
//   }
//   }
//   else {
//       toastr.error('Please select trader/kissan first');
//   }
// }