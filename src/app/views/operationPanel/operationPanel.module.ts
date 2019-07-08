// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { OperationHeadComponent } from './operation-head/operation-head.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceHistoryComponent } from './invoice-history/invoice-history.component';
import { OperationRoutingModule } from './operation-routing.module';
import { WrReportComponent } from './wr-report/wr-report.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OperationRoutingModule
  ],
  declarations: [
    OperationHeadComponent,
    InvoiceComponent,
    InvoiceHistoryComponent,
    WrReportComponent,
    UserListComponent
  ]
})
export class OperationModule { }
