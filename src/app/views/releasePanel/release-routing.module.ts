import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovedListComponent } from './approved-list/approved-list.component';
import { ReleaseorderListComponent } from './releaseorder-list/releaseorder-list.component';
import { VerificationListComponent } from './verification-list/verification-list.component';
import { RoCwfDetailsComponent } from './ro-cwf-details/ro-cwf-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Release Panel'
    },
    children: [
      {
        path: 'releaseorderList',
        component: ReleaseorderListComponent,
        data: {
          title: 'Release Order List'
        }
      },
      {
        path: 'verificationList',
        component: VerificationListComponent,
        data: {
          title: 'invoice'
        }
      },
      {
        path: 'approvedList',
        component: ApprovedListComponent,
        data: {
          title: 'invoice-History'
        }
      },
      {
        path: 'rocwfdetails',
        component: RoCwfDetailsComponent,
        data: {
          title: 'Ro Cwf Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseRoutingModule {}
