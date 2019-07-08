import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadGenerationComponent } from './lead-generation/lead-generation.component';
import { PublishedListComponent } from './published-list/published-list.component';
import { HistoryListComponent } from './history-list/history-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Others Panel'
    },
    children: [
      {
        path: 'leadGeneration',
        component: LeadGenerationComponent,
        data: {
          title: 'Release Order List'
        }
      },
      {
        path: 'publishedList',
        component: PublishedListComponent,
        data: {
          title: 'invoice'
        }
      },
      {
        path: 'historyList',
        component: HistoryListComponent,
        data: {
          title: 'invoice-History'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule {}
