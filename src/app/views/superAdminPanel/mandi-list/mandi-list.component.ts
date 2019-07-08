import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
import { SuperAdminService } from '../../superAdminPanel/services/super-admin.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-mandi-list',
  templateUrl: './mandi-list.component.html',
  styleUrls: ['./mandi-list.component.scss']
})
export class MandiListComponent implements OnInit {

  public searchValue: string = '';
  data: any = {};
  //public initialPageNumber: number = 1;
  value = false;
  public listType: boolean = false;
  public updatedData: any = {};
  emptyListMsg: string;
  public lab: any;
  public mandiSuperviser: any;
  public areaManager: any;
  public mandiId: string;
  public id: string;

  constructor(private service: SuperAdminService, public toastr: ToastrService, public common: CommonService) { }

  ngOnInit() {
    this.inItList('', 1);
  }

  // Get New  Mandi list
  public inItList(searchValue, pageNumber) {
    var reqObj = { pageNumber: pageNumber };
    if (searchValue) {
      reqObj['searchValue'] = searchValue;
    }
    this.service.getMandiList(reqObj)
      .then(result => {
        if (result.responseCode === 200) {
          this.updatedData = this.common.arrangePaginationData(result.responseCode, result.result);
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

  public labList() {
    this.service.getLabList()
      .then(result => {
        if (result.responseCode === 200) {
          this.lab = result.result;
        }
      })
  }

  public mandiSuperviserList() {
    this.service.getMandiSuperviserList()
      .then(result => {
        if (result.responseCode === 200) {
          this.mandiSuperviser = result.result;
        }
      })
  }

  public areaManagerList() {
    this.service.getAreaManagerList()
      .then(result => {
        if (result.responseCode === 200) {
          this.areaManager = result.result;
        }
      })
  }

  public openModal(mandiId, modalId, id): void {
    modalId == 'assignMandiSuperviser' ? this.mandiSuperviserList() : modalId == 'assignLab' ? this.labList() : this.areaManagerList();
    this.mandiId = mandiId;
    this.id = id;
    $('#' + modalId).modal('show');
  }

  public assignLabToMandi(labId): void {
    var reqObj = {
      _id: this.mandiId,
      labId: labId
    };
    this.service.assignLabToMandi(reqObj).then(result => {

      if (result.responseCode == 200) {
        $('#assignLab').modal('hide');
        this.toastr.success(result.responseMessage);
        this.inItList(this.searchValue, this.updatedData['currentPage']);
      }
    })
  }

  public assignMandi (id, name, type): void {
    var reqObj = {
      _id: this.mandiId,
    };
    if (type == 'Superviser') {
      reqObj['mandiSupervisorId'] = id;
    } else {
      reqObj['areaManagerId'] = id;
    }
    this.service.assignMandiToMandiSuperviser(reqObj).then(result => {
      if (result.responseCode == 200) {
        if (type == 'Superviser') {
          $('#assignMandiSuperviser').modal('hide');
        } else {
          $('#assignAreaManager').modal('hide');
        }

        this.toastr.success(result.responseMessage);
        this.inItList(this.searchValue, this.updatedData['currentPage']);
      }
    })
  }

}