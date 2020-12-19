import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueInfoComponent } from './issue-info/issue-info.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [MainComponent, IssuesListComponent, IssueInfoComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
