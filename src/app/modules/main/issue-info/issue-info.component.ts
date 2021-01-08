import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { IssueInfoService } from './issue-info.service';
import * as moment from 'moment/moment';

@Component({
	selector: 'app-issue-info',
	templateUrl: './issue-info.component.html',
	styleUrls: ['./issue-info.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueInfoComponent implements OnInit, OnDestroy {

	public selectedIssue!: IIssue;
	private selectedIssue$!: Subscription;

	public createDateFromNow!: string;

	constructor(private issueInfoService: IssueInfoService, private changeDetection: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.selectedIssue$ = this.issueInfoService.activeIssue.subscribe((next: IIssue | undefined) => {
			if (next) {
				this.selectedIssue = next;
				this.createDateFromNow = moment(new Date(next.info.created_at)).fromNow();
				this.changeDetection.markForCheck();
			}
		});
	}

	ngOnDestroy(): void {
		this.selectedIssue$.unsubscribe();
	}

}
