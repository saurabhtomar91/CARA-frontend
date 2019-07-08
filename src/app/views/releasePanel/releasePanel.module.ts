// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { ReleaseRoutingModule } from './release-routing.module';

import { ApprovedListComponent } from './approved-list/approved-list.component';
import { ReleaseorderListComponent } from './releaseorder-list/releaseorder-list.component';
import { VerificationListComponent } from './verification-list/verification-list.component';
import { RoCwfDetailsComponent } from './ro-cwf-details/ro-cwf-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReleaseRoutingModule
  ],
  declarations: [
    ApprovedListComponent,
    ReleaseorderListComponent,
    VerificationListComponent,
    RoCwfDetailsComponent
  ]
})
export class ReleaseModule { }
