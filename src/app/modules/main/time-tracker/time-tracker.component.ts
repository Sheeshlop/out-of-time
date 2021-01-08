import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { IssueInfoService } from '../issue-info/issue-info.service';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTrackerComponent implements OnInit {

  public activeIssue!: IIssue;
  private activeIssue$!: Subscription;
  constructor(private changeDetector: ChangeDetectorRef, private issueInfoService: IssueInfoService) { }

  ngOnInit(): void {
    this.activeIssue$ = this.issueInfoService.activeIssue.subscribe((activeIssue: IIssue | undefined) => {
			if (activeIssue) {
				this.activeIssue = activeIssue;
				this.changeDetector.detectChanges();
			}
		});
  }

}
