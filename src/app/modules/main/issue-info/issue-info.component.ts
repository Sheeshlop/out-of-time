import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-info',
  templateUrl: './issue-info.component.html',
  styleUrls: ['./issue-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
