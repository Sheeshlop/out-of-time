import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { TimerService } from 'src/app/services/timer.service';

@Component({
	selector: 'app-issue',
	templateUrl: './issue.component.html',
	styleUrls: ['./issue.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueComponent implements OnInit, OnDestroy {

	@Input() checked!: boolean;
	@Input() issue!: IIssue;

	public activeTrackingIssue!: IIssue;
	private activeTrackingIssue$!: Subscription;

	constructor(private timerService: TimerService, private changeDetector: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.activeTrackingIssue$ = this.timerService.activeTrackingIssue.subscribe((active: IIssue | undefined) => {
			if (active) {
				if (this.issue === active) {
					this.activeTrackingIssue = active;
					this.changeDetector.markForCheck();
				} else {
					this.activeTrackingIssue$.unsubscribe();
				}
			}
		})
	}

	select(value: boolean): void {
		this.checked = value;
	}
	ngOnDestroy(): void {
		this.activeTrackingIssue$.unsubscribe();
	}
}
