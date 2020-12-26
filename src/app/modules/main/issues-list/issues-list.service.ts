import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGithubIssue, IIssue } from 'src/app/interfaces/github/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class IssuesListService {

  issues$ = new BehaviorSubject<IIssue[]>([]);

  constructor() { }

  addSingleIssue(username: string, reponame: string, issue: IGithubIssue): void {
    this.issues$.next([{
      username,
      reponame,
      checked: false,
      estimatedTime: '',
      trackedTime: '',
      info: issue
    }]);
  }

  addMultipleIssues(username: string, reponame: string, issues: IGithubIssue[]): void {
    issues.forEach(issue => {
      this.addSingleIssue(username, reponame, issue);
    });
  }
}
