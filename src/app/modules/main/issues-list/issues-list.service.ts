import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGithubIssue, IIssue } from 'src/app/interfaces/github/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class IssuesListService {

  issues$ = new BehaviorSubject<IIssue[]>([]);

  constructor() { }

  addSingleIssue(username: string, reponame: string, rawIssue: IGithubIssue): void {
    const issue: IIssue = {
      username,
      reponame,
      checked: false,
      estimatedTime: '',
      trackedTime: '',
      info: rawIssue
    };
    this.issues$.next([issue]);
  }

  addMultipleIssues(username: string, reponame: string, issues: IGithubIssue[]): void {
    issues.forEach(issue => {
      this.addSingleIssue(username, reponame, issue);
    });
  }

  saveIssuesToStorage(issues: IIssue[]): void {
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  loadIssueseFromStorage(): IIssue[] | 'no issues in storage' {
    const issues = localStorage.getItem('issues');
    if (issues) {
      return JSON.parse(issues);
    }
    return 'no issues in storage';
  }

}
