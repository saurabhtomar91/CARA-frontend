// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { LabRoutingModule } from './lab-routing.module';
import { LabAssistantComponent } from './lab-assistant/lab-assistant.component';
import { LabHeadComponent } from './lab-head/lab-head.component';
import { LabReportComponent } from './lab-report/lab-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LabRoutingModule
  ],
  declarations: [
    LabAssistantComponent,
    LabHeadComponent,
    LabReportComponent
  ]
})
export class LabModule { }
