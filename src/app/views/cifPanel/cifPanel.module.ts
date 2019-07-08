// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { CifRoutingModule } from './cif-routing.module';
import { ListComponent } from './list/list.component';
import { VerificationComponent } from './verification/verification.component';
import { CommodityListComponent } from './commodity-list/commodity-list.component';
import { DetailsComponent } from './details/details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { VerifyDetailsComponent } from './verify-details/verify-details.component';

//Services 
import { CifService } from './services/cif.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CifRoutingModule
  ],
  declarations: [
  DetailsComponent,
  ListComponent,
  VerificationComponent,
  CommodityListComponent,
  CommodityListComponent,
  ShowDetailsComponent,
  ReportDetailsComponent,
  EditDetailsComponent,
  VerifyDetailsComponent
],
providers:[CifService]
})
export class CifModule { }
