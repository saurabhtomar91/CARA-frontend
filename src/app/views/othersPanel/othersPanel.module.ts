// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { LeadGenerationComponent } from './lead-generation/lead-generation.component';
import { PublishedListComponent } from './published-list/published-list.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { OthersRoutingModule } from './others-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OthersRoutingModule
  ],
  declarations: [
    LeadGenerationComponent,
    PublishedListComponent,
    HistoryListComponent
  ]
})
export class OthersModule { }
