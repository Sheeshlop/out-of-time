import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueInfoComponent } from './issue-info/issue-info.component';
import { MainRoutingModule } from './main-routing.module';
import { NavHeaderModule } from 'src/app/shared/modules/nav-header/nav-header.module';
import { IssueComponent } from './issues-list/issue/issue.component';
import { IssueListHeaderComponent } from './issues-list/issue-list-header/issue-list-header.component';
import { IssueLabelComponent } from './issues-list/issue/issue-label/issue-label.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TimeTrackerModule } from './time-tracker/time-tracker.module';

@NgModule({
	declarations: [
		MainComponent,
		IssuesListComponent,
		IssueInfoComponent,
		IssueComponent,
		IssueListHeaderComponent,
		IssueLabelComponent
	],
	imports: [
		CommonModule,
		MainRoutingModule,
		NavHeaderModule,
		MatCheckboxModule,
		MatButtonModule,
		TimeTrackerModule,
	],
})

export class MainModule { }
