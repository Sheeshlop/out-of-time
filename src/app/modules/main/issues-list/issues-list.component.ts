import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  allSelected!: boolean;

  @ViewChildren('issueList') private issueList!: QueryList<any>;

  constructor(private issuesListService: IssuesListService, private changeDetection: ChangeDetectorRef) {
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
    this.allSelected = state;
  }

  deleteSelected(): void {
    this.issueList.forEach(item => {
      if (item.selected) {
        this.removeIssue(item.issue);
      }
    });
  }

  addIssue(issue: IIssue): void {
    this.issues.push(issue);
  }

  removeIssue(issue: IIssue): void {
    this.issues = this.issues.filter(item => item !== issue);
  }

  reset(): void {
  }

  ngOnDestroy(): void {
  }
}
