import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Account Panel'
    },
    children: [
      {
        path: 'receiptList',
        component: ReceiptListComponent,
        data: {
          title: 'Receipt List'
        }
      },
      {
        path: 'paymentList',
        component: PaymentListComponent,
        data: {
          title: 'Payment List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
