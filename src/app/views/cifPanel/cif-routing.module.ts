import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { VerificationComponent } from './verification/verification.component';
import { CommodityListComponent } from './commodity-list/commodity-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { VerifyDetailsComponent } from './verify-details/verify-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CIF Panel'
    },
    children: [
      {
        path: 'details',
        component: DetailsComponent,
        data: {
          title: 'CIF Details'
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'CIF Lists'
        }
      },
      {
        path: 'verification',
        component: VerificationComponent,
        data: {
          title: 'CIF Verification'
        }
      },
      {
        path: 'pendingcommodity',
        component: CommodityListComponent,
        data: {
          title: 'CIF Commodity Lists'
        }    
      },
      {
          path: 'showdetails',
          component: ShowDetailsComponent,
          data: {
            title: 'show details'
        }
      },
      {
        path: 'reportdetails',
        component: ReportDetailsComponent,
        data: {
          title: 'report details'
        }
      },
      {
        path: 'editdetails',
        component: EditDetailsComponent,
        data: {
        title: 'edit details'
        }
      },
      {
        path: 'verifydetails',
        component: VerifyDetailsComponent,
        data: {
        title: 'verify details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CifRoutingModule {}
