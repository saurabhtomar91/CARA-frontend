import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationHeadComponent } from './operation-head/operation-head.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceHistoryComponent } from './invoice-history/invoice-history.component';
import { WrReportComponent } from './wr-report/wr-report.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Operation Panel'
    },
    children: [
      {
        path: 'operationHead',
        component: OperationHeadComponent,
        data: {
          title: 'operation-Head'
        }
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'invoice'
        }
      },
      {
        path: 'invoiceHistory',
        component: InvoiceHistoryComponent,
        data: {
          title: 'invoice-History'
        }
      },
      {
        path: 'wrReport',
        component: WrReportComponent,
        data: {
          title: 'WR Report'
        }
      },
      {
        path: 'userList',
        component: UserListComponent,
        data: {
          title: 'User List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule {}
