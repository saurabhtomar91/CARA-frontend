import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CwfListComponent } from './cwf-list/cwf-list.component';
import { CwfReportComponent } from './cwf-report/cwf-report.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CWF Panel'
    },
    children: [
      {
        path: 'cwfList',
        component: CwfListComponent,
        data: {
          title: 'CWF List'
        }
      },
      {
        path: 'cwfReport',
        component: CwfReportComponent,
        data: {
          title: 'CWF Report'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CwfRoutingModule {}
