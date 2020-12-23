import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { removeIssue, reset } from './service/issues-list.actions';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesListComponent implements OnInit {

  public issues$: Observable<IIssue[]>;

  constructor(private store: Store<{ issuesList: IIssue[] }>) {
    this.issues$ = store.select('issuesList');
  }

  ngOnInit(): void {

  }

  addIssue(): void {

  }

  removeIssue(issue: IIssue): void {
    this.store.dispatch(removeIssue());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

}
