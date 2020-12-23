import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { fetchMultipleIssues, fetchSingleIssue } from 'src/app/modules/main/issues-list/service/issues-list.actions';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavHeaderComponent implements OnInit {

  getIssuesForm!: FormGroup;

  constructor(private github: GithubService, private store: Store<{issuesList: IIssue[]}>) {

  }

  ngOnInit(): void {
    this.getIssuesForm = new FormGroup({
      username: new FormControl('sheeshlop'),
      reponame: new FormControl('out-of-time'),
      issueNumber: new FormControl()
    });
  }

  getIssuesSubmit(): void {
    if (this.getIssuesForm.controls.issueNumber.value) {
      this.getSingleIssue();
    } else {
      this.getMultipleIssues();
    }
  }

  getSingleIssue(): void {
    this.github.getSingleIssue(this.getIssuesForm.value.username, this.getIssuesForm.value.reponame, this.getIssuesForm.value.issueNumber).subscribe(
      res => {
        this.store.dispatch(fetchSingleIssue(res));
      }
    );
  }

  getMultipleIssues(): void {
    this.github.getMultipleIssues(this.getIssuesForm.value.username, this.getIssuesForm.value.reponame).subscribe(
        res => {
          this.store.dispatch(fetchMultipleIssues(res));
        }
    );
  }

}
