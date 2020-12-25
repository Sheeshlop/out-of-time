import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class IssuesListService {

  issues$ = new BehaviorSubject<IIssue[]>([]);

  constructor() { }

  addSingleIssue(issue: IIssue): void {
    this.issues$.next([issue]);
  }
  addMultipleIssues(issues: IIssue[]): void {
    this.issues$.next(issues);
  }

}
