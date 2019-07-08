import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Survey Panel'
    },
    children: [
      {
        path: 'surveyList',
        component: SurveyListComponent,
        data: {
          title: 'Survey List'
        }
      },
      {
        path: 'newSurvey',
        component: NewSurveyComponent,
        data: {
          title: 'New Survey'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {}
