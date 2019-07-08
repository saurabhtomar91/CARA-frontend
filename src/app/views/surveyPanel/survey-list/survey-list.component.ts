import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
import { SurveyService } from '../../surveyPanel/service/survey.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {

  public searchValue: string = '';
  data: any = {};
  //public initialPageNumber: number = 1;
  value = false;
  public listType: String = "PENDING";
  public updatedData: any = {};
  emptyListMsg: string;

  constructor(private service: SurveyService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList('', 1);
  }

   // Get Survey list
   public inItList(searchValue, pageNumber) {
    var reqObj = { pageNumber: pageNumber, status: this.listType };
    if (searchValue) {
      reqObj['searchValue'] = searchValue;
    }
    this.service.getSurveyList(reqObj)
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
