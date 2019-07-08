import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../service/release.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../services/common.service';
declare var $: any;
@Component({
  selector: 'app-releaseorder-list',
  templateUrl: './releaseorder-list.component.html',
  styleUrls: ['./releaseorder-list.component.scss']
})
export class ReleaseorderListComponent implements OnInit {

  public searchValue: string = '';
  value = false;
  public listType: string = 'PENDING';
  public updatedData: any = {};
  emptyListMsg: string;
  public details: any = {};
  public modal: any; 
  
  constructor(private service: ReleaseService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList('',1);

  }

  // Get New Release Order list
  public inItList(searchValue, pageNumber) {
    var reqObj = { pageNumber: pageNumber, status: this.listType};
    if (searchValue) {
      reqObj['roNumberAndName'] = searchValue;
    }
    this.service.getReleaseOrderList(reqObj)
      .then(result => {
        if (result.responseCode === 200) {
          this.updatedData = this.common.arrangePaginationData(result.responseCode, result.results);
          //this.resetPage();
          if (this.updatedData.list.length == 0) {
            this.emptyListMsg = reqObj['searchValue'] ? 'No data matched your search.' : 'List empty.'
          }
        }
        else {
          this.toastr.error(result.responseMessage, "");
        }
      })
  }

  // public resetPage(){
  //   this.details = null;
  // }

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
      if(searchText.length == 0){
        this.inItList(this.searchValue, 1);
      }
    }
  }

  public onStatusSelectionChange(status): void {
    this.listType = status;
    this.inItList(this.searchValue,1);
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.inItList(this.searchValue,1);
  }

  //@ Show receiver details 
public showReceiverDetails(ro): void {
    this.details = ro;
    $('#releaseOrder').modal('show');
}

}
