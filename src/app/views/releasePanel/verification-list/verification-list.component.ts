import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../service/release.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../services/common.service';
declare var $: any;
@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.scss']
})
export class VerificationListComponent implements OnInit {

  public searchValue: string = '';
  public verifyByAreaManager: String = 'false';
  public updatedData: any = {};
  emptyListMsg: string;
  public releaseOrderId: any;
  public popUpMsg: any;

  constructor(private service: ReleaseService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList('', 1);
  }

  // Get New Release Order list
  public inItList(searchValue, pageNumber) {
    var reqObj = { pageNumber: pageNumber, verifyByAreaManager: this.verifyByAreaManager };
    if (searchValue) {
      reqObj['roNumberAndName'] = searchValue;
    }
    this.service.getReleaseOrderList(reqObj)
      .then(result => {
        if (result.responseCode === 200) {
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
    }
  }

  public onStatusSelectionChange(status): void {
    this.verifyByAreaManager = status;
    this.inItList(this.searchValue, 1);
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.inItList(this.searchValue, 1);
  }

  public openModal(releaseId, msg, modalId): void {
    this.releaseOrderId = releaseId;
    this.popUpMsg = msg;
    $('#releaseOrder' + modalId).modal('show');
  }


  public deleteSuccess(): void {
    console.log("success" + this.releaseOrderId);
    this.service.verifyReleaseOrder({ releaseOrderId: this.releaseOrderId }).then((result) => {
      if (result.responseCode == 200) {
        this.inItList(this.searchValue, 1);
        this.toastr.success(result.responseMessage);
      }
    })
  }
}
