// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { NewSurveyComponent } from './new-survey/new-survey.component';

// Components Routing

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SurveyRoutingModule
  ],
  declarations: [
    SurveyListComponent,
    NewSurveyComponent
]
})
export class SurveyModule { }
