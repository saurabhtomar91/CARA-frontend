// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CwfListComponent } from './cwf-list/cwf-list.component';
import { CwfRoutingModule } from './cwf-routing.module';
import { CwfReportComponent } from './cwf-report/cwf-report.component';

// Components Routing

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CwfRoutingModule
  ],
  declarations: [
    CwfListComponent,
    CwfReportComponent
  ]
})
export class CwfModule { }
