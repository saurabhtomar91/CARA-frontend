import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
import { CifService } from '../../cifPanel/services/cif.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-operation-head',
  templateUrl: './operation-head.component.html',
  styleUrls: ['./operation-head.component.scss']
})
export class OperationHeadComponent implements OnInit {

  public searchValue: string = '';
  data: any = {};
  //public initialPageNumber: number = 1;
  value = false;
  public listType: boolean = false;
  public updatedData: any = {};
  emptyListMsg: string;

  constructor(private service: CifService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList('', 1);
  }

  // Get New  Commodity list
  public inItList(searchValue, pageNumber) {
    var reqObj = { pageNumber: pageNumber, status: 'OPERATIONHEAD', verifyByOperationHead: this.listType };
    if (searchValue) {
      reqObj['searchValue'] = searchValue;
    }
    this.service.getCifList(reqObj)
      .then(result => {
        if (result.responseCode === 200) {
          // this.toastr.success(result.responseMessage, "");
          this.updatedData = this.common.arrangePaginationData(result.responseCode, result.results);
          if (this.updatedData.list.length == 0) {
            this.emptyListMsg = reqObj['searchValue'] ? 'No data matched your search.' : 'List empty.'
          }
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })
  }

  public prevAndNext(flag, value) {
    if (value == false) {
      var page = this.common.getPageNumber(flag, this.updatedData);
      this.inItList(this.searchValue, page);
    }
  }

  public onSearchChange(searchText) {
    if (searchText.length >= 3) {
      this.searchValue = searchText;
      this.inItList(this.searchValue, 1);
    } else {
      if (searchText.length == 0) {
        this.inItList(this.searchValue, 1);
      }
      // return;
    }
  }

  public onStatusSelectionChange(status): void {
    this.listType = status;
    this.inItList(this.searchValue, 1);
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.inItList(this.searchValue, 1);
  }

}
