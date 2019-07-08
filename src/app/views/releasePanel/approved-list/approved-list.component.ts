import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../service/release.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../services/common.service';
// import { DecryptDataPipe } from '../../../constant/decrypt-data.pipe';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.scss']
})
export class ApprovedListComponent implements OnInit {

  public searchValue: string = '';
  data: any = {};
  value = false;
  public listType: string = 'PENDING';
  public updatedData: any = {};
  emptyListMsg: string;

  constructor(private service: ReleaseService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList('',1);
  }

  // Get New  Approvel list
  public inItList(searchValue, pageNumber) {
    var reqObj = { pageNumber: pageNumber, status: this.listType };
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


}
