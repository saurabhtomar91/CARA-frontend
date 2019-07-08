// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { AccountRoutingModule } from './account-routing.module';

// Components Routing

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ],
  declarations: [
    ReceiptListComponent,
    PaymentListComponent
  ]
})
export class AccountModule { }
