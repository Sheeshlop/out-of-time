import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IIssue } from 'src/app/interfaces/github/issue.interface';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueComponent implements OnInit {

  @Input() selected!: boolean;
  @Input() issue!: IIssue;

  constructor() { }

  ngOnInit(): void {
    console.log(this.issue);
  }

}
