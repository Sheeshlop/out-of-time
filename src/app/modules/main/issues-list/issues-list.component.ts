import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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

  public issues: IIssue[];
  private issueStream!: Subscription;

  constructor(private issuesListService: IssuesListService) {
    this.issues = [];
  }

  ngOnInit(): void {
    this.issueStream = this.issuesListService.issues$.subscribe((issues: IIssue[]) => {
      console.log('upcoming issues!', issues);
      this.issues = issues;
    });
  }

  addIssue(): void {

  }

  removeIssue(issue: IIssue): void {
  }

  reset(): void {
  }

  ngOnDestroy(): void {
    this.issueStream.unsubscribe();
  }
}
