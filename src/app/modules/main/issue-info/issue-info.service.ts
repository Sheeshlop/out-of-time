import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';

@Injectable({
	providedIn: 'root'
})
export class IssueInfoService {

	public activeIssue = new BehaviorSubject<IIssue | undefined>(undefined);

	constructor() { }

	selectIssue(issue: IIssue): void {
		this.activeIssue.next(issue);
	}
}
