import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { IssuesListService } from './issues-list/issues-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  issues: IIssue[] = [];
  issues$!: Subscription;

  constructor(private issuesListService: IssuesListService) { }

  ngOnInit(): void {
    this.issues$ = this.issuesListService.issues$.subscribe((issues: IIssue[]) => {
      if (issues.length) {
        this.appendIssues(issues);
      }
    });
  }

  appendIssues(issues: IIssue[]): void {
  }

}
