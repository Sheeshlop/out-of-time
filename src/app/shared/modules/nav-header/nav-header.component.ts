import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavHeaderComponent implements OnInit {

  getIssuesForm!: FormGroup;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.getIssuesForm = new FormGroup({
      userNameInput: new FormControl('angular'),
      repoNameInput: new FormControl('angular'),
      issueNumberInput: new FormControl()
    });
  }

  getIssues(): void {
    this.github.getIssues(this.getIssuesForm.controls.userNameInput.value,
      this.getIssuesForm.controls.repoNameInput.value, this.getIssuesForm.controls.issueNumberInput.value || null).subscribe(res => {
      console.log(res);
    }, err => {
      console.error(err);
    });
  }
}
