import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IIssue } from 'src/app/interfaces/github/issue.interface';
import { IssuesListService } from 'src/app/modules/main/issues-list/issues-list.service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavHeaderComponent implements OnInit {

  getIssuesForm!: FormGroup;

  constructor(private github: GithubService, private issuesListService: IssuesListService) {

  }

  ngOnInit(): void {
    this.getIssuesForm = new FormGroup({
      username: new FormControl('angular'),
      reponame: new FormControl('angular'),
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
    this.github.getSingleIssue(this.getIssuesForm.value.username, this.getIssuesForm.value.reponame,
      this.getIssuesForm.value.issueNumber).subscribe(
        res => {
          this.issuesListService.addSingleIssue(res);
        }
    );
  }

  getMultipleIssues(): void {
    this.github.getMultipleIssues(this.getIssuesForm.value.username, this.getIssuesForm.value.reponame).subscribe(
        res => {
          this.issuesListService.addMultipleIssues(res);
        }
    );
  }

}
