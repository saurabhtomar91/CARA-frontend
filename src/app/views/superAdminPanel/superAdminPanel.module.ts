// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { SuperAdminRoutingModule } from './superAdmin-routing.module';
import { KisanListComponent } from './kisan-list/kisan-list.component';
import { TraderListComponent } from './trader-list/trader-list.component';
import { MandiListComponent } from './mandi-list/mandi-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { ListOfStateComponent } from './list-of-state/list-of-state.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { AumDailyReportComponent } from './aum-daily-report/aum-daily-report.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
imports: [
  CommonModule,
  FormsModule,
  SuperAdminRoutingModule
],
declarations: [
  KisanListComponent,
  TraderListComponent,
  MandiListComponent,
  LabListComponent,
  ProductListComponent,
  EmployeeListComponent,
  BankListComponent,
  ListOfStateComponent,
  TabListComponent,
  ActivityLogComponent,
  StockDataComponent,
  AumDailyReportComponent,
  AddProductComponent,
  UpdateProductComponent
]
})
export class SuperAdminModule { }
