import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { IssuesListService } from './issues-list.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesListComponent implements OnInit, OnDestroy {

  @Input() issues: IIssue[] = [];
  issues$!: Subscription;

  constructor(private issuesListService: IssuesListService, private changeDetection: ChangeDetectorRef) {
    // this.issues = [];
  }

  ngOnInit(): void {
    this.issues$ = this.issuesListService.issues$.subscribe((issues: IIssue[]) => {
      issues.forEach(issue => {
        this.addIssue(issue);
      });
      this.changeDetection.markForCheck();
    });
  }

  onSelectAll(state: boolean): void {
  }

  addIssue(issue: IIssue): void {
    this.issues.push(issue);
  }

  removeIssue(issue: IIssue): void {
  }

  reset(): void {
  }

  ngOnDestroy(): void {
  }
}
