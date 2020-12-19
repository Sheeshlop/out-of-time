import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueInfoComponent } from './issue-info/issue-info.component';
import { MainRoutingModule } from './main-routing.module';
import { NavHeaderModule } from 'src/app/shared/modules/nav-header/nav-header.module';


@NgModule({
  declarations: [MainComponent, IssuesListComponent, IssueInfoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NavHeaderModule
  ]
})
export class MainModule { }
