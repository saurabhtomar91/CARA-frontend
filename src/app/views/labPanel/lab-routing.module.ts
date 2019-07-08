import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabAssistantComponent } from './lab-assistant/lab-assistant.component';
import { LabHeadComponent } from './lab-head/lab-head.component';
import { LabReportComponent } from './lab-report/lab-report.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Lab Panel'
    },
    children: [
      {
        path: 'labAssistant',
        component: LabAssistantComponent,
        data: {
          title: 'Lab Assistant'
        }
      },
      {
        path: 'head',
        component: LabHeadComponent,
        data: {
          title: 'Lab Head'
        }
      },
      {
        path: 'labReport',
        component: LabReportComponent,
        data: {
          title: 'Lab Report'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule {}
