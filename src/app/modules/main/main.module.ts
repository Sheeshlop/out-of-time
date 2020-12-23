import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueInfoComponent } from './issue-info/issue-info.component';
import { MainRoutingModule } from './main-routing.module';
import { NavHeaderModule } from 'src/app/shared/modules/nav-header/nav-header.module';
import { StoreModule } from '@ngrx/store';
import * as issuesListFeature from 'src/app/modules/main/issues-list/service/issues-list.reducer';

@NgModule({
  declarations: [MainComponent, IssuesListComponent, IssueInfoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NavHeaderModule,
    StoreModule.forFeature(issuesListFeature.issuesListFeatureKey, issuesListFeature.getIssuesListReducer)
  ]
})
export class MainModule { }
