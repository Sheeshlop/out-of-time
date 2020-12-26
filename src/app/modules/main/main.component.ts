import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { IssueInfoService } from './issue-info/issue-info.service';
import { IssuesListService } from './issues-list/issues-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor(private issuesListService: IssuesListService, private issueInfoService: IssueInfoService) { }

  ngOnInit(): void {
  }

  selectIssue(issue: IIssue): void {
    this.issueInfoService.selectIssue(issue);
  }

}
